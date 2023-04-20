import React from "react";
import "./home.scss";
import { BlogItem, Button, Gap } from "../../components";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          tittle="create blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button tittle="Previous" />
        <Gap width={20} />
        <Button tittle="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
