import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-[95%] mx-auto  flex justify-between items-center">
        <div>
          <h1 className="font-bold underline">Giới thiệu</h1>
          <ul>
            <li>Phương thức hoạt động của Airbnb</li>
            <li>Trang tin tức</li>
            <li>Nhà đầu tư</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
            <li>HotelTonight</li>
            <li>Airbnb for Work</li>
            <li>Nhờ có Host, mọi điều đều có thể</li>
            <li>Cơ hội nghề nghiệp</li>
            <li>Thư của nhà sáng lập</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold uppercase">Cộng động</h1>
          <ul>
            <li>Sự đa đạng và Cảm giác thân thuộc</li>
            <li>Tiện nghi phù hợp cho người khuyết tật</li>
            <li>Đối tác liên kết Airbnb</li>
            <li>Chỗ ở cho tuyến đầu</li>
            <li>Lượt giới thiệu của khách</li>
            <li>Airbnb.org</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold uppercase">Đón tiếp khách</h1>
          <ul>
            <li>Cho thuê nhà</li>
            <li>Tổ chức Trải nghiệm trực tuyến</li>
            <li>Tổ chức Trải nghiệm</li>
            <li>Đón tiếp khách có trách nhiệm</li>
            <li>Trung tâm tài nguyên</li>
            <li>Trung tâm cộng đồng</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold uppercase">Hỗ trợ</h1>
          <ul>
            <li>Biện pháp ứng phó đại dịch COVID-19</li>
            <li>Trung tâm trợ giúp</li>
            <li>Các tùy chọn hủy</li>
            <li>Hỗ trợ khu dân cư</li>
            <li>Tin cây và an toàn</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
