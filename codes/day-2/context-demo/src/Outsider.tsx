import { useContext } from "react"
import { ValueContext } from "./context/valuecontext"

const Outsider = () => {
    //since this component is outside the branch of App (NOT child of App), hence it will recive ONLY the default data in the context, but not the actual value as supplied by the provider of that context (whic is App)
    const value = useContext(ValueContext)
    return (
        <div>Outsider: {value.counterValue}</div>
    )
}

export default Outsider