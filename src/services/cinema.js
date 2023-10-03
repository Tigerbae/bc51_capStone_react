import { request } from "../configs/api";

class CinemaService{
 fetchShowtimeApi(id){
  return request({
   url:`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
   method:"GET"
  })
 }
}
export const cinemaService = new CinemaService()