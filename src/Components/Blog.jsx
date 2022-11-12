import React from 'react';
import './Blog.css'
import BlogCard from './BlogCard';
import {useState,useEffect} from 'react'


function Blog(props) {
    const [Data, setData] = useState([]);

    useEffect(() => { 
         fetch('https://api.webz.io/filterWebContent?token=xxxx&q=site_type%3A(news%20OR%20blogs)%20is_first%3Atrue%20(Tesla%20OR%20TSLA%20OR%20Po...')
        .then((res) =>  res.json())
        .then(res => {
            console.log(res.updated)
            setData(res);
        }).catch(e => {
            console.log(e);
        });
    });
    


    console.log(Data);
    return (
        <div className='blog-cards'>{Data.filter((_,index)=>index<5).map((item) => {
            
            return (
                <div className='Card'>
                  <div className='card-element' >
                 <img className='Card-img' src={item.image_url} />
                 <div className='author-name'>{item.title}</div>
                  <div className='article-content'>{item.description}</div>
                  <p className='date'>{item.country}</p>
                 <a href={item.link}> <button className='btn1'>Learn the full Article</button></a>
                 
              </div>
              </div>
            );

        })}
        </div>
    );

}

export default Blog;