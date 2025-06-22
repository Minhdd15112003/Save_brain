from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware

from models.database import SessionLocal
from utils.load_env import *
from api.routes import user, auth
from models import database

#config
load_dotenv()
database.Base.metadata.create_all(bind=database.engine)
router = APIRouter()
app = FastAPI(title="save_brain", description="Save sample data of conversational AI", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4000","https://accounts.google.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
app.include_router(user.userRouter)
app.include_router(auth.authRouter)
@app.get("/")
async def root():
    return {"message": "Hello World"}

