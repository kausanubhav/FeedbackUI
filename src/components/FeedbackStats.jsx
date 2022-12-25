import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //Calculate rating avg
  let average =
    //reduce is a high order function which returns a single value
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {!isNaN(average) ? average : 0}</h4>
    </div>
  );
}

