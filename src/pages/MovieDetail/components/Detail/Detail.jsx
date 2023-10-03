import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../../../services/movie";
import { formatDate } from "../../../../utils/date";
import { Button, Modal } from "antd";
export default function Detail() {
  const params = useParams();
  const [detail, setDetail] = useState({});
  const fetchMovieDetailApi = async () => {
    const result = await movieService.fetchMovieDetailApi(params.id);
    setDetail(result.data.content);
    
  };
  //Button open Modal:
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchMovieDetailApi();
  }, []);
  return (
    <div className="row">
      <div className="col-3">
        <img className="w-100" src={detail.hinhAnh} />
      </div>
      <div className="col-9">
        <h4>{detail.tenPhim}</h4>
        <p>{detail.moTa}</p>
        {/* goi ham formatDate de format date(ham nam o file date.js) :  */}
        <p>{formatDate(detail.ngayKhoiChieu)}</p>
        <div>
          <Button type="primary" onClick={showModal}>
            Trailer
          </Button>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <iframe
              src={detail.trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Modal>
        </div>
      </div>
    </div>
  );
}
