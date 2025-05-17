from sqlalchemy import create_engine, Column, CHAR, DateTime, func
from sqlalchemy.orm import sessionmaker, declarative_base
import uuid

from utils.load_env import *

# - dùng để **bật chế độ in ra các câu lệnh SQL** mà SQLAlchemy thực thi lên terminal/console `echo=True`
engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class BaseModel(Base):
    __abstract__ = True
    id = Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()), index=True, unique=True)
    create_at = Column(DateTime, default=func.now())
    update_at = Column(DateTime, default=func.now(), onupdate=func.now())
