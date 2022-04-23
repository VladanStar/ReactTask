import {FaTimes} from "react-icons/fa"
import React, {useState} from 'react';
import Card from './shared/Card';

const FeedbackItem = ({item}) => {

 const handleClick =()=>{

 }

    return (
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        {/* <button  onClick={()=>{
          console.log(item.id)
        }} className="close"><FaTimes color="purple"/></button> */}
             <button  onClick={handleClick} className="close"><FaTimes color="purple"/></button>
        <div className="text-display">{item.text}</div>
   
      </Card>
  )
}

export default FeedbackItem