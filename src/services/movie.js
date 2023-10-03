import { request } from "../configs/api";

class MovieService {
  fetchBannerApi() {
    return request({
      url: "/QuanLyPhim/LayDanhSachBanner",
      method: "GET",
    });
  }
  fetchMovieListApi() {
    return request({
      url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    });
  }
  fetchMovieDetailApi(id) {
    return request({
      url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    });
  }
}
export const movieService = new MovieService();
