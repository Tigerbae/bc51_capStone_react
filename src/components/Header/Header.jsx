import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoAction } from "../../store/actions/userAction";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const renderContent = () => {
    if (!userState.userInfo) {
      return (
        <>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="btn btn-outline-info my-2 my-sm-0 mr-2"
            type="sumit"
          >
            Register
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="btn btn-outline-success my-2 my-sm-0"
          >
            Login
          </button>
        </>
      );
    }else{
     return<><span>Hi~ {userState.userInfo.hoTen}</span> <button onClick={handleLogout} className="btn btn-danger">LOUTOUT</button></>
    }
  };
  const handleLogout =()=>{
   localStorage.removeItem("USER_INFO")
   dispatch(setUserInfoAction(null))
   navigate("/")
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Phimmoi
      </a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
        </ul>
        <div className="ml-auto">{renderContent()}</div>
      </div>
    </nav>
  );
}
