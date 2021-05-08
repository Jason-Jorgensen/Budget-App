import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing";



import { BrowserRouter } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
    return(
    <div>
        <Header />
        <Landing />
        <Footer />
    </div>
    )}

export default App;
