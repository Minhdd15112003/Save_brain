from sqlalchemy import Column, Integer, String, Enum, Text, ForeignKey
from sqlalchemy.orm import relationship

from models.Response_tags import response_tags
from models.database import BaseModel


# lazy='select': Load dữ liệu khi truy cập (mặc định).
# lazy='dynamic': Trả về query object, phù hợp khi cần lọc thêm.
# lazy='joined': Thực hiện JOIN để load dữ liệu liên quan ngay lập tức.
# lazy='subquery': Tương tự joined nhưng dùng subquery.


class Response(BaseModel):
    __tablename__ = 'responses'
    title = Column(String(255))
    content = Column(Text)
    status = Column(Enum('public', 'private'), default='private')
    user_id = Column(String(38), ForeignKey('users.id', onupdate="cascade", ondelete="cascade"), nullable=False,
                     index=True)
    vote = Column(Integer, default=0)
    tags = relationship("Tag", secondary=response_tags, back_populates="response", cascade="all, delete-orphan",
                        lazy="dynamic")
    user = relationship("User", back_populates="responses", lazy="joined", cascade="all, delete-orphan")
