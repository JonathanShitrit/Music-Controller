import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Rout, Link, Redirect, Switch, Route } from "react-router-dom";
import CreateRoomPage from "./CreateRoomPage";
import JoinRoomPage from "./JoinRoomPage";

const HomePage = () =>{
    const [count, setCount] = useState(0);

    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <p>This is the home page</p>
                    </Route>
                    <Route path="/join" component={JoinRoomPage}/>
                    <Route path="/create" component={CreateRoomPage}/>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default HomePage;