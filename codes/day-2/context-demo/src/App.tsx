import { useState } from 'react';
import './App.css'
import ChildOfApp from './ChildOfApp'
import { ValueContext } from "./context/valuecontext";
import { ContextValueType } from './types/contextvaluetype';

function App() {
  const [counter, setCounter] = useState(100)

  const increaseCounter = () => {
    setCounter(
      (oldValue) => { return oldValue + 1 }
    )
  }

  const contextData: ContextValueType = {
    counterValue: counter,
    updateCounterValue: increaseCounter
  }
  return (
    <>
      You are in App and provides value {counter}
      <br />
      <ValueContext.Provider value={contextData}>
        <ChildOfApp />
      </ValueContext.Provider>
    </>
  )
}

export default App
