import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userService } from "../../services/user";
import { setUserInfoAction } from "../../store/actions/userAction";
export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [state,setState] = useState({
    taiKhoan:"",
    matKhau:"",
  })
  const handleChange = (event)=>{
    setState({
      ...state,
      [event.target.name]:event.target.value
    })
  }
  const handleSubmit =async(event)=>{
    event.preventDefault()
    const result = await userService.loginApi(state)
    localStorage.setItem("USER_INFO",JSON.stringify(result.data.content))
    dispatch(setUserInfoAction(result.data.content))
    navigate("/")
  }
  return (
    <div className="w-25 mx-auto py-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            onChange={handleChange}
            name="taiKhoan"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            onChange={handleChange}
            name="matKhau"
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">LOGIN</button>
      </form>
    </div>
  );
}
