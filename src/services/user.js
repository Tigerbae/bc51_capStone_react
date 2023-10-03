import { request } from "../configs/api";

class UserService{
 registerApi(data){
  return request({
   data,
   url:`/QuanLyNguoiDung/DangKy`,
   method:"POST"
  })
 }
 loginApi(data){
  return request({
   data,
   url:`/QuanLyNguoiDung/DangNhap`,
   method:"POST"
  })
 }
}
export const userService = new UserService()