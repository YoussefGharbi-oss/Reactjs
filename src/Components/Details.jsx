import React from 'react';

import DetailCard from './DetailCard';
import LeftDetail from './LeftDetail';

function Details(props) {
    return (
  
        <div className='Detail'>
          <LeftDetail />
          <div className="Detail-cards">
          <DetailCard Title={"Fast NewsWorthy"}  paragraph={"News is hot right now and there's never been a better time to be a content creator. With so many people interested in learning about the latest happenings, it's important to keep up with the trends and provide"}/>   
          <DetailCard Title={"Strong Servers"}  paragraph={"Servers play a critical role in the online world. Without them, websites and applications would not be possible. Servers are the backbone of the online world"}/>   
          <DetailCard Title={"Fast NewsWorthy"}  paragraph={"News is hot right now and there's never been a better time to be a content creator. With so many people interested in learning about the latest happenings, it's important to keep up with the trends and provide"}/>   
          </div>
        </div>
     
    );
}

export default Details;