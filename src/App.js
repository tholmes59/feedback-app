import { useState } from "react"
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
import { v4 as uuidv4} from 'uuid'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
       if(window.confirm('Are you sure')){
           setFeedback(feedback.filter((item) => item.id !== id))

       }
    }

    const addFeedback = (newFeedack) => {
        newFeedack.id = uuidv4()
        setFeedback([newFeedack, ...feedback])
    }

    return (
        <>
        <Header text='Feedback'/>
        <div className="container">
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        
        </>
    )
}

export default App