import Header from './components/Header';
import FeedbackData from "../src/data/FeedbackData"
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import './App.css';

function App() {
  const[feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header bgColor="red" textColor='blue' text="Vladan Cupric"/>
      <div className="container">
      <FeedbackList  feedback = {feedback}/>
      </div>
   
    </>
  );
}

export default App;
