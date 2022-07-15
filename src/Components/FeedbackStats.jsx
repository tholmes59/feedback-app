import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
 
  const ratings = (feedback.reduce((prev, current) => prev + current.rating, 0) /feedback.length).toFixed(1).replace(/[.,]0$/,'')
  
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(ratings) ? 0 : ratings}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackStats
