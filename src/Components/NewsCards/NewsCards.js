import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./cards.css";

const NewsCards = ({ articles }) => {


  return (
    <div className="cards">
      {articles.map((article, i) => (
        <NewsCard article={article} i={i} key={i} />
      ))}
    </div>
  );
};

export default NewsCards;
