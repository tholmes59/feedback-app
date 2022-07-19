import React from 'react'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
 
  const ratings = (feedback.reduce((prev, current) => prev + current.rating, 0) /feedback.length).toFixed(1).replace(/[.,]0$/,'')
  
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(ratings) ? 0 : ratings}</h4>
    </div>
  )
}

export default FeedbackStats
