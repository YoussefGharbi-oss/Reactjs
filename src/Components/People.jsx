import React from 'react';
import people from '../assetes/people.png';
import './header.css';
function People(props) {
    return (
        <div className="header-content-people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    
    );
}

export default People;