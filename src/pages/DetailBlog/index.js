import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";
import { Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Detail Blog Page</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <Gap height={20} />
      <Link tittle="Kembali ke Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
