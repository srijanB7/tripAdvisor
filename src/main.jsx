import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { TripProvider } from "./context/TripContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <TripProvider>
                <App />
            </TripProvider>
        </BrowserRouter>
    </React.StrictMode>
);
