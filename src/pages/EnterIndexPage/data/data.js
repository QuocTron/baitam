// data.js
export const initialData = Array.from({ length: 100 }, (_, i) => {
  return {
    key: "1",
    imageAndStatus: `Hình ảnh và trạng thái ${i + 1}`,
    order: i + 1,
    readingLine: `Tuyến đọc ${i + 1}`,
    contractNumber: `Số hợp đồng ${i + 1}`,
    clockSen: `Sen đồng hồ ${i + 1}`,
    customerName: `Tên khách hàng ${i + 1}`,
    address: `Địa chỉ ${i + 1}`,
    moneyCollected: `Tiền thu ${i + 1}`,
    oldIndex: `Chỉ số cũ ${i + 1}`,
    newIndex: `Chỉ số mới ${i + 1}`,
    consumption: `Tiêu thụ ${i + 1}`,
    readingDate: `Ngày đọc ${i + 1}`,
  };
});
