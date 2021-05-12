import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Forms from "./pages/Form";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Loading from "./pages/Loading";
import PrivateRoute from "./components/routes/private-route"
import "tailwindcss/tailwind.css";
import { useAuth0 } from "@auth0/auth0-react";


// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
    const { isLoading} = useAuth0();
    if(isLoading) {
        return <Loading></Loading>
    }

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
                    <PrivateRoute exact path={"/profile"}>
                        <Profile/>
                    </PrivateRoute>
                </Switch>

            </div>
        </Router>
    )
}

export default App;
