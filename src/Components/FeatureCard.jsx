import React from 'react';

function FeatureCard(props) {
    return (
   
             <div className='Feature-card' >
              <span className='Line'></span>
              <h1>{props.title}</h1>
              <p>{props.Description}</p>

             </div>

    );
}

export default FeatureCard;