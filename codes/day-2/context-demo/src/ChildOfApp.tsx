import { useState } from "react"
import ChildOfFirst from "./ChildOfFirst"
import { ValueContext } from "./context/valuecontext"
import SecondChild from "./SecondChild"
import { ContextValueType } from "./types/contextvaluetype"

const ChildOfApp = () => {
    const [counter, setCounter] = useState(200)

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
        <div>
            You are in ChildOfApp and provides value {counter}
            <br />
            <br />
            <ValueContext.Provider value={contextData}>
                <ChildOfFirst />
                <br />
                <br />
                <SecondChild />
            </ValueContext.Provider>
        </div>
    )
}

export default ChildOfApp