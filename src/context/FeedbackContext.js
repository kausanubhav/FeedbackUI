import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4(); //using uuidv4(it is installed using 'i uuid' )
    //since the state is immutable, we can't push a new value
    //we'll have to create a copy
    // ... is spread operator; first put feedbacks which are already there
    //and in addition to that, put the new feedbacks
    setFeedback([newFeedback, ...feedback]);
  };

  //Edit feedback

  //1.Sets item to be updated
  //editfeedback sets the feedbackedit which will then be used by feedback form
  //we will send feedbackEdit and editFeedback as context
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //2. update feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  //3. function to change the state of edit once new feedback is edited
  const changeEditWhenUpdated = (item, newEdit) => {
    setFeedbackEdit({
      item: item,
      edit: newEdit,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        changeEditWhenUpdated,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
