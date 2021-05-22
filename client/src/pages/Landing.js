import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forms from "./Form";
import Login from "./Login";
import Profile from "./Profile";
import Loading from "./Loading";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PrivateRoute from "../components/routes/private-route"
import ProtectedRoute from "../components/routes/protected-route"

function Landing() {
    return (
        <div>
                 <Header />
            <Switch>
                <Route exact path={["/", "/login"]}>
                    <Login />
                </Route>
                <Route exact path={"/forms"}>
                    <Forms />
                </Route>
                <ProtectedRoute path="/profile" component={Profile}>
                    <Profile />
                </ProtectedRoute>
            </Switch>
            <Footer />

        </div>
    )
}

export default Landing
