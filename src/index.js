import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
import Main from "./Main"; // Import Main which holds the router configuration
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="886898322466-d8ugsujrnv2pjr59qqjcom9uu7attunq.apps.googleusercontent.com">
        <React.StrictMode>
            <Main /> {/* Rendering Main component */}
       </React.StrictMode>
    </GoogleOAuthProvider>,
  
);