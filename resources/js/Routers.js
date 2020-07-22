import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Categorie  from "./components/_admin/components/categories/Categorie";
import Home  from "./components/_admin/components/pages/Home";
import Notfound from "./components/errors/Notfound";

/**
 * Le router de notre application 
 */
const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/categories" component={Categorie}/>
                <Route  component={Notfound}/>
            </Switch>
        </Router>
    )
}

export default Routers;