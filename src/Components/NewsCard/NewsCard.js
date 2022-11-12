import React from "react";
import "./card.css";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
}) => {
  return (
    <div>
<div class="main">
 
 <ul class="cards">
   <li class="cards_item">
     <div class="card">
       <div class="card_image"> <img className="cardImg"
           src={
             urlToImage?.length != 0
               ? urlToImage
               : "https://docs.appspace.com/wp-content/uploads/2020/12/News.png"
           }
         /></div>
       <div class="card_content">
        <h5 className="date"> {new Date(publishedAt).toDateString()}{' '}-{' '}{source.name}
        </h5>
         
         <h4 className="mydes"> 
        {i + 1} {' '}-{' '} {' '} {title}</h4>
         <p class="card_text"> {description}</p>
         <button class="thebtn card_btn">Read More</button>
       </div>
     </div>
   </li>

 </ul>
</div>
    </div>

  );
};
export default NewsCard;
