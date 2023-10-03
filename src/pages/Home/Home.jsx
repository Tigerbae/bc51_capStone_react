import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieService } from "../../services/movie";
import { Button } from "antd";
import useMovieList from "../../hooks/useMovieList";
import "./style.scss"
export default function Home() {
  const navigate = useNavigate();
  const [bannerList, setBannerList] = useState([]);
  const movieList = useMovieList();
  const fetchBanner = async () => {
    const result = await movieService.fetchBannerApi();
    setBannerList(result.data.content);
  };
  useEffect(() => {
    fetchBanner();
  }, []);
  const renderMovieList = () => {
    return movieList.map((element) => {
      return (
        <div key={element.maPhim} className="col-3">
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: 500 }}
          >
            <img
              style={{ height: 350, objectFit: "cover" }}
              className="card-img-top"
              src={element.hinhAnh}
              alt="movie"
            />
            <div className="card-body">
              <h5 className="card-title">{element.tenPhim}</h5>
              <Button
                onClick={() => {
                  navigate(`/detail/${element.maPhim}`);
                }}
                type="primary"
                loading={false}
                size="large"
              >
                XEM CHI TIẾT
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderBannerList = () => {
    return bannerList.map((element, idx) => {
      return (
        <div
          key={element.maPhim}
          className={`carousel-item ${idx === 0 && "active"}`}
        >
          <img className="d-block w-100" src={element.hinhAnh} alt="" />
        </div>
      );
    });
  };
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">{renderBannerList()}</div>
      </div>
      <div className="py-5">
        <div className="row mt-3 mx-auto w-75">{renderMovieList()}</div>
      </div>
    </>
  );
}
