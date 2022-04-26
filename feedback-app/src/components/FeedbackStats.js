import React from 'react'

const FeedbackStats = ({feedback}) => {

    // Calculate ratings avg
    let average = feedback.reduce((acc, curr)=>{
        return acc + curr.rating
    },0) /feedback.lenght;

    console.log(average);
  return (
    <div className='feedback-stats'>
        <h4>{feedback.lenght} Reviews</h4>
        <h4>Average Rating {average}</h4>
    </div>

  )
}

export default FeedbackStats;