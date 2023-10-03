import React, { createRef, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/user";
import {
  validateEmail,
  validateLetter,
  validateNumber,
  validatePassword,
  validateRequired,
} from "../../utils/validate";
import { notification } from "antd";
export default function Register() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    hoTen: "",
  });
  const taiKhoanRef = createRef();
  const hoTenRef = createRef();
  const matKhauRef = createRef();
  const emailRef = createRef();
  const soDtRef = createRef();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;
    isValid &= validateRequired(
      state.taiKhoan,
      taiKhoanRef.current,
      "please fill in the blanks"
    );
    isValid &=
      validateRequired(
        state.hoTen,
        hoTenRef.current,
        "please fill in the blanks"
      ) && validateLetter(state.hoTen, hoTenRef.current, "wrong format");
    isValid &=
      validateRequired(
        state.matKhau,
        matKhauRef.current,
        "please fill in the blanks"
      ) && validatePassword(state.matKhau, matKhauRef.current, "wrong format");
    isValid &=
      validateRequired(
        state.email,
        emailRef.current,
        "please fill in the blanks"
      ) && validateEmail(state.email, emailRef.current, "wrong format");
    isValid &=
      validateRequired(
        state.soDt,
        soDtRef.current,
        "please fill in the blanks"
      ) && validateNumber(state.soDt, soDtRef.current, "wrong format");
    if (isValid) {
      const result = await userService.registerApi(state);
      notification.warning({
        message: "Register Successful",
        placement: "top",
      });
      navigate("/login");
    }
  };

  return (
    <div className="w-25 mx-auto py-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Tai Khoan</label>
          <input
            onChange={handleChange}
            type="text"
            name="taiKhoan"
            className="form-control"
          />
          <span ref={taiKhoanRef} className="error text-danger"></span>
        </div>
        <div className="form-group">
          <label htmlFor="">Mat Khau</label>
          <input
            onChange={handleChange}
            type="text"
            name="matKhau"
            className="form-control"
          />
          <span ref={matKhauRef} className="error text-danger"></span>
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>

          <input
            onChange={handleChange}
            type="text"
            name="email"
            className="form-control"
          />
          <span ref={emailRef} className="error text-danger"></span>
        </div>
        <div className="form-group">
          <label htmlFor="">So Dien Thoai</label>
          <input
            onChange={handleChange}
            type="number"
            name="soDt"
            className="form-control"
          />
          <span ref={soDtRef} className="error text-danger"></span>
        </div>
        <div className="form-group">
          <label htmlFor="">Ma Nhom</label>
          <input
            disabled
            type="number"
            name="maNhom"
            value="GP01"
            placeholder="GP01"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Ho Ten</label>
          <input
            onChange={handleChange}
            type="text"
            name="hoTen"
            className="form-control"
          />
          <span ref={hoTenRef} className="error text-danger"></span>
        </div>
        <button className="btn btn-success">REGISTER</button>
      </form>
    </div>
  );
}
