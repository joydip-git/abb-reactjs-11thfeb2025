import { Context, createContext } from "react";



export const ValueContext: Context<ContextValueType> = createContext<ContextValueType>(
    {
        counterValue: 0,
        updateCounterValue: () => { }
    }
)