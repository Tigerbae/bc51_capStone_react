import { notification } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserType } from "../enums/api";

export default function AdminGuard(props) {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.userReducer);
  useEffect(() => {
    if (!userState.userInfo) {
      notification.warning({
        message: "Please login as administrator",
        placement: "top",
      });
      navigate("/login");
    } else {
      if (userState.userInfo.maLoaiNguoiDung !== UserType.QuanTri) {
        notification.warning({
          message: "You do not have administrator access",
        });
        navigate("/");
      }
    }
  }, []);
  return <>{props.children}</>;
}
