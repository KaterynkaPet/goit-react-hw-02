import { useState } from 'react'

import Feedback from './components/feedback/Feedback.jsx'
import Options from './components/options/Options.jsx'
import Description from './components/description/Description.jsx'

let state = {
  good: 0,
	neutral: 0,
	bad: 0
}

function App() {
 
  return (
    <>
      <Description />
      <Options />
      <Feedback
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
      />
       
    </>
  )
}

export default App;
