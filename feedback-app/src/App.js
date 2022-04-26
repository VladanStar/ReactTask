import Header from "./components/Header";
import FeedbackData from "../src/data/FeedbackData";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item)=> item.id !== id));
    }
  };
  return (
    <>
      <Header bgColor="red" textColor="blue" text="Vladan Cupric" />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
