import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing"
import Forms from "./pages/Form"
import Login from "./pages/Login"
import "tailwindcss/tailwind.css"


// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={["/", "/login"]}>
                        <Login />
                    </Route>
                    <Route exact path={"/landing"}>
                        <Landing />
                    </Route>
                    <Route exact path={"/forms"}>
                        <Forms/>
                    </Route>
                </Switch>

            </div>
        </Router>
    )
}

export default App;
