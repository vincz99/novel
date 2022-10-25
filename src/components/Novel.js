import React from 'react';


function Novel(props) {
return (
  <div className='Div-body'>

  <a href='https://www.google.com/'>
  <img src={props.img} alt=''/>

  <div className='Title-tag' >  <h1> {props.title} </h1>  </div>

  </a>



</div>



);

}

export default Novel;


//   <p> {props.content}</p>
