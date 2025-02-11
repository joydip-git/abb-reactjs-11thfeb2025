import { createRoot } from "react-dom/client";
import { App } from "./App";
import { StrictMode } from "react";

const root = document.getElementById('root') as HTMLElement;

//StrictMode -> a built-in component. Lets you find common bugs in your components early during development.

createRoot(root)
    .render(
        <StrictMode>
            <App />
        </StrictMode>
    )
