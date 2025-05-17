from sqlalchemy import Column, Integer, String, Float, DateTime, func, CHAR, Enum, Boolean, Text, ForeignKey, Table

from database import Base

# lazy='select': Load dữ liệu khi truy cập (mặc định).
# lazy='dynamic': Trả về query object, phù hợp khi cần lọc thêm.
# lazy='joined': Thực hiện JOIN để load dữ liệu liên quan ngay lập tức.
# lazy='subquery': Tương tự joined nhưng dùng subquery.


response_tags = Table('response_tags',
                      Base.metadata,
                      Column("response_id", CHAR(38),
                             ForeignKey("responses.id", onupdate="cascade", ondelete="cascade"),
                             primary_key=True),
                      Column("tag_id", CHAR(38), ForeignKey("tags.id", onupdate="cascade", ondelete="cascade"),
                             primary_key=True))
