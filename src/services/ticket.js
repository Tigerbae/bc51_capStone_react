import { request } from "../configs/api";

class TicketService {
  fetchTicketDetailApi(id) {
    return request({
      url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
      method: "GET",
    });
  }
  bookTicketApi(data) {
    return request({
      data,
      url: "/QuanLyDatVe/DatVe",
      method: "POST",
    });
  }
}
export const ticketService = new TicketService();
