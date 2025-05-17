from sqlalchemy import Column, Integer, String, Float, DateTime, func, CHAR, Enum, Boolean, Text, ForeignKey, Table
from sqlalchemy.orm import relationship
from models.Response_tags import response_tags
from models.database import BaseModel


# lazy='select': Load dữ liệu khi truy cập (mặc định).
# lazy='dynamic': Trả về query object, phù hợp khi cần lọc thêm.
# lazy='joined': Thực hiện JOIN để load dữ liệu liên quan ngay lập tức.
# lazy='subquery': Tương tự joined nhưng dùng subquery.


class Tag(BaseModel):
    __tablename__ = 'tags'
    name = Column(String(80), unique=True, index=True)
    response = relationship("Response", secondary=response_tags, back_populates="tags", cascade="all, delete-orphan",
                            lazy="dynamic")
