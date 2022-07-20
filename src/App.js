import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./Components/AboutIconLink"
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

    return (
        <FeedbackProvider>
            <Router>
            <Header text='Feedback'/>
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm/>
                            <FeedbackStats/>
                            <FeedbackList/>
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
                <AboutIconLink/>
            </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App