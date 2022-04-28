import Header from "./components/Header";
import FeedbackData from "../src/data/FeedbackData";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4} from "uuid";
import AboutPage from "./components/pages/AboutPage";
import {BrowseRouter as Router, Route} from "react-router-dom"
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
 
  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    setFeedback([ newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item)=> item.id !== id));
    }
  };
  return (
    <Router>
      <Header bgColor="red" textColor="blue" text="Vladan Cupric" />
      <div className="container">
        <FeedbackForm  handleAdd ={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <AboutPage />
        <Route path="/about">This is about Route</Route>
      </div>
    </Router>
  );
}

export default App;
