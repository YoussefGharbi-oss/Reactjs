import React from 'react';
import FeatureCard from './FeatureCard';

function FeatureCards(props) {
    return (
        <div className='Features-card'>
        <FeatureCard title={"Chatbot" } Description={"Chat bots are becoming increasingly popular as a way to interact with customers and partners. They allow businesses to quickly and easily create a dialogue with customers, and can automate certain tasks"}/>
        <FeatureCard title={"Voice Recognition" } Description={"As technology advances, more and more businesses are turning to voice recognition in order to speed up processes and improve customer service. While this technology is still in its infancy, there are a number of different ways that it can be used. In this article, we will explore some of the most common methods for using voice recognition in business."}/>
        <FeatureCard title={"Ai News" } Description={"Chat bots are becoming increasingly popular as a way to interact with customers and partners. They allow businesses to quickly and easily create a dialogue with customers, and can automate certain tasks"}/>
        </div>
    );
}

export default FeatureCards;