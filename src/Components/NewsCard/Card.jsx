import React from 'react'


function Card(props) {
  return (
    <div className="card">
    <div className="face face1">
      <div className="content">
        <img src={props.Image} className='cardimg' />
        <h3 className='card-type'>{props.Type}</h3> 
        
      </div>
    </div>
    <div className="face face2">
      <div className="content">
        <p className='card-content'>{props.Content}</p>
      <strong ><p className='try-saying'>{props.TrySaying}</p></strong>   
       <strong className='card-sentences'>{props.Sentences}<p></p></strong>   
      </div>
    </div>
  </div>
  )
}

export default Card