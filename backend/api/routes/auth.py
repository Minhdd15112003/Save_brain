from fastapi import FastAPI, HTTPException, Depends, Request, status, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from google.oauth2 import id_token
from google.auth.transport import requests
from google_auth_oauthlib.flow import InstalledAppFlow
import os
from api.schemas.authSchema import GoogleAuthRequest
from utils.load_env import *
from datetime import datetime, timedelta
import jwt
from typing import Optional
from fastapi.responses import JSONResponse

authRouter = APIRouter(
    prefix="/auth",
    tags=["auth"],
    responses={404: {"description": "Not found"}},
)


@authRouter.post("/google")
async def google_auth(auth_req: GoogleAuthRequest):
    try:
        flow = InstalledAppFlow.from_client_config(
            {
                "web": {
                    "client_id": GOOGLE_CLIENT_ID,
                    "client_secret": GOOGLE_CLIENT_SECRET,
                    "auth_uri": AUTH_URI,
                    "token_uri": TOKEN_URI
                }
            },
            scopes=["openid", "email", "profile"]
        )

        # Trao đổi code để lấy token
        flow.redirect_uri = auth_req.redirect_uri
        flow.fetch_token(code=auth_req.code)
        credentials = flow.credentials

        # Xác minh id_token
        id_info = id_token.verify_oauth2_token(
            credentials.id_token,
            requests.Request(),
            GOOGLE_CLIENT_ID
        )

        payload = {
            "id": id_info["sub"],
            "email": id_info["email"],
            "name": id_info.get("name"),
            "picture": id_info.get("picture")
        }
        # Tạo access_token đơn giản (trong thực tế nên dùng JWT)
        expires_in = credentials.expires_in
        access_token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
        return {
            "access_token": access_token,
            "refresh_token": credentials.refresh_token,
            "user": payload,
            "expires_in": int((expires_in - datetime.utcnow()).total_seconds()),
            "credentials": credentials,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
