import React from 'react'

const FeedbackStats = ({feedback}) => {

    // Calculate ratings avg
   let average = Math.round(
        feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
      )
    console.log(average);
    average =average.toFixed(1);
  return (
    <div className='feedback-stats'>
       <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>

  )
}

export default FeedbackStats;