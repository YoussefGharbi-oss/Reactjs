import React, { useState, useEffect } from "react";
import "../pages/App.css"
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "../Components/NewsCards/NewsCards";
import FirstCards from "../Components/NewsCard/FirstCards";
import NavBar from "../Components/NavBar";

import AOS from 'aos'
import Footer from "../Components/Footer";

const alanKey =
  "e7e2dedc460c408d44e82eaace1541d82e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command == "articles") {
          console.log(articles);
          setNewsArticles(articles);
        }
      },
    });
  
    
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div>
      <NavBar/>
  
        <h1 className="Mytitle" data-aos="zoom-in">Alan AI News</h1>
      
        
       {newsArticles?.length == 0 ? (
        <FirstCards />
      ) : (
        <NewsCards articles={newsArticles} />
      )}
     <Footer />
          
    </div>
  );
};

export default App;
