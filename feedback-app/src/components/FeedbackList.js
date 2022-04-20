import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({feedback}) {

    if(!feedback || feedback.lenght ===0){
        return <p>No Feedback Yet</p>
    }
    // console.log(feedback)
  return (
    <div>FeedbackList</div>
  )
}

export default FeedbackList