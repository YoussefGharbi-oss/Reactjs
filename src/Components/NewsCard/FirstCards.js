import React from "react";
import "./FirstCards.css";
import categories from "../NewsCard/categories.svg";
import source from "../NewsCard/source.svg";
import terms2 from "../NewsCard/terms2.svg";
import  { useEffect } from 'react';
import AOS from 'aos'
import Card from "./Card";

import image from "../NewsCard/news.svg";

function FirstCards() {

   useEffect(()=>{
  AOS.init({
    offset: 200,
    duration: 1500,
    easing: 'ease-in-sine',
    delay: 100,
  });
})
  return (
  <div data-aos="fade-left" className="first-card">
    <div className="container">
      <Card Image={image} Type={"Latest"} TrySaying={"Try Saying:"} Sentences={"Give me the latest news"}/>
      <Card Image={categories} Type={"Categories"} Content={"Business, Entertainment, Health, Science, Sports, Technology etc.."} TrySaying={"Try Saying:"} Sentences={"Give me the latest technology news"}/>
      <Card Image={terms2} Type={"Terms"} Content={"Bitcoin, PlayStation5, Corona Virus, Donald Trump etc.."} TrySaying={"Try Saying:"} Sentences={"What's up with Corona Virus"}/>
      <Card Image={source} Type={"Sources"} Content={"CNN, BBC News, ABC news, Buzzfeed etc.."} TrySaying={"Try Saying:"} Sentences={"Give me the news from CNN"}/>
    </div>
  </div>

  )
}

export default FirstCards
