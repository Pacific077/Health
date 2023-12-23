import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import FormState from "./context/Forms/FormState";
import Authstate from "./context/Auth/Authstate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Authstate>

    <FormState>
        <App />
    </FormState>
    </Authstate>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
