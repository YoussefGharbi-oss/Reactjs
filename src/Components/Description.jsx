import React from 'react';
import FeatureCards from './FeatureCards';
import MidText from './MidText';
import UpText from './UpText';
import Details from '../Components/Details';

function Description(props) {
    return (
        
             <div className='Description' >
             <UpText />
             <MidText />
             <FeatureCards/>
          
             </div>
        
    );
}

export default Description;