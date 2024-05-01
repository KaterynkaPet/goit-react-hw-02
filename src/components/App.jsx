import { useState } from 'react';

import Feedback from './feedback/Feedback.jsx'
import Options from './options/Options.jsx'
import Description from './description/Description.jsx'
import Notification from './notification/Notification.jsx';



function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  
  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
      <Feedback feedback={feedback} />
      ) : (
      <Notification message="No feedback yet" />
        )}
    </>
  );
}

export default App;
