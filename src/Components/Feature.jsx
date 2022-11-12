import React from 'react';
import './Feature.css'
import PossibilityText from './PossibilityText';
import AOS from 'aos'
import  { useEffect } from 'react';
import PossibilityImage from './PossibilityImage';
import AdRectangle from './AdRectangle';

function Feature(props) {
  
    return (
        <div className='Possibility'>
            <div className='Detail-Feature'>
                <PossibilityImage />
                <PossibilityText  />
            </div>
           <AdRectangle />  
        </div>
    );
}

export default Feature;