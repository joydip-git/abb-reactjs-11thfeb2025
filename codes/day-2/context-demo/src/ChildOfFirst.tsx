import { useContext } from "react"
import { ValueContext } from "./context/valuecontext"

const ChildOfFirst = () => {
    //though there are two upper-level providers (App and ChildOfApp), this consumer is going to get the data from the closest provider (ChildOfApp)
    const valueObject = useContext(ValueContext)
    return (
        <div>
            Value in ChildOfFirst: &nbsp; {valueObject.counterValue}
            <br />
            <button type="button" onClick={valueObject.updateCounterValue}>Increase</button>
        </div>
    )
}

export default ChildOfFirst