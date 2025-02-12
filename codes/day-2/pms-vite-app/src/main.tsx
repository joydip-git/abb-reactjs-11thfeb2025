import { createRoot } from "react-dom/client";
import { App } from "./components/app/App";
// import { StrictMode } from "react";
import './theme.css'

const root = document.getElementById('root') as HTMLElement;

// setTimeout(
//     () => {
createRoot(root)
    .render(<App />)
//     },
//     4000
// )
