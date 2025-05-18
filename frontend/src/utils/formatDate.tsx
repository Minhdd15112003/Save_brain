interface FormatDateProps {
  date: string | Date | number; // Đầu vào có thể là chuỗi, Date, hoặc timestamp
  locale?: string; // Tham số locale tùy chọn
}

const FormatDate = ({ date, locale = 'en-US' }: FormatDateProps) => {
  // Chuyển đổi đầu vào thành đối tượng Date
  const dateObj = new Date(date);

  // Kiểm tra xem date có hợp lệ không
  if (isNaN(dateObj.getTime())) {
    return <span>Invalid Date</span>;
  }

  // Định dạng ngày theo kiểu "Thursday, May 30, 2024"
  const formattedDate = dateObj.toLocaleDateString(locale, {
    weekday: 'long', // Hiển thị tên thứ đầy đủ (Thursday)
    month: 'long', // Hiển thị tên tháng đầy đủ (May)
    day: 'numeric', // Hiển thị ngày (30)
    year: 'numeric', // Hiển thị năm (2024)
  });

  return <span>{formattedDate}</span>;
};

export default FormatDate;
