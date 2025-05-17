from fastapi import APIRouter, Depends, HTTPException

userRouter = APIRouter(
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)
@userRouter.get("/")
async def find_all():
    return {"data": [
        {
            "minh":123
        }
    ]}
