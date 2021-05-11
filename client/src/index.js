import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import './styles/tailwind.css';
import Auth0ProviderWithHistory from "./auth0-provider-with-history"

ReactDOM.render(
    <Auth0ProviderWithHistory>
        <App/>

    </Auth0ProviderWithHistory>
    , document.getElementById("root")
);
