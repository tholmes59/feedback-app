import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
import { v4 as uuidv4} from 'uuid'
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./Components/AboutIconLink"

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
        <Router>
        <Header text='Feedback'/>
        <div className="container">
            <Routes>
                <Route exact path='/' element={
                    <>
                        <FeedbackForm handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback}/>
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                    </>
                }>
                </Route>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
            <AboutIconLink/>
        </div>
        </Router>
    )
}

export default App