import React from "react";

import reportWebVitals from "./reportWebVitals";
import { setupProject } from "./project-setup";
import App from "./App";
import "./index.css";

// Renders the web-app/extension content to DOM.
setupProject({
  rootElement: (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ),
  injectExtensionTo: "body",
  injectWebAppTo: "#root",
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
     if( request.message === "activate_tuck_note_side_bar") {
        console.log("activate tuck note sidebar received @ ", new Date())
     }
  }
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
