from fastapi import APIRouter, Depends, HTTPException
from google.oauth2 import id_token
from google_auth_oauthlib.flow import InstalledAppFlow
from utils.load_env import *
from api.schemas.authSchema import GoogleAuthRequest
from google.auth.transport import requests
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
                "web":{
                    "client_id": GOOGLE_CLIENT_ID,
                    "client_secret": GOOGLE_CLIENT_SECRET,
                    "auth_uri": AUTH_URI,
                    "token_uri": TOKEN_URI
                }
            },
            scopes=["openid", "email", "profile"]
        )
        flow.redirect_uri = auth_req.redirect_uri

        # Trao đổi code để lấy token
        flow.fetch_token(code=auth_req.code)
        credentials = flow.credentials

        # Xác minh id_token
        id_info = id_token.verify_token(
            credentials.id_token,
            requests.Request(),
            GOOGLE_CLIENT_ID
        )
        # Tạo access_token đơn giản (trong thực tế nên dùng JWT)
        access_token = f"token_{id_info['sub']}"
        return {
            "access_token": access_token,
            "user": {
                "id": id_info["sub"],
                "email": id_info["email"],
                "name": id_info.get("name"),
                "picture": id_info.get("picture")
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
