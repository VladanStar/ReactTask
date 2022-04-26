import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";
import RatingSelected from "./RatingSelected";

const FeedbackForm = ({handleAdd}) => {
    const [rating, setRating] = useState(10)
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handlesubmit = (e)=>{
      e.preventDefault();
      if(text.trim().length >10){
          const newFeedback = {
              text,
              rating

          }
          handleAdd(newFeedback)
      }
    

  }


  return (
    <Card>
      <form onSubmit={handlesubmit}>
        <h2>How would you rate your service whit us?</h2>
       <RatingSelected  select={(rating)=>
           setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled} version="secondary">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
