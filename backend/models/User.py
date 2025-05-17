from sqlalchemy import Column, Integer, String, Float, DateTime, func, CHAR, Enum, Boolean, Text, ForeignKey, Table
from sqlalchemy.orm import relationship
from models.database import BaseModel


# lazy='select': Load dữ liệu khi truy cập (mặc định).
# lazy='dynamic': Trả về query object, phù hợp khi cần lọc thêm.
# lazy='joined': Thực hiện JOIN để load dữ liệu liên quan ngay lập tức.
# lazy='subquery': Tương tự joined nhưng dùng subquery.

class User(BaseModel):
    __tablename__ = 'users'
    username = Column(String(80))
    email = Column(String(80), unique=True)
    avatar = Column(String(255), nullable=True)
    google_id = Column(String(255))
    gender = Column(Enum('male', 'female', 'other'), default='other')
    status = Column(Enum('active', 'banned'), default='active')
    admin = Column(Boolean, default=False)
    response = relationship("Response", back_populates="users", cascade="all, delete-orphan", lazy="dynamic")


