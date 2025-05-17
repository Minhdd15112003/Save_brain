from pydantic import BaseModel

class GoogleAuthRequest(BaseModel):
    token: str
    redirect_uri: str