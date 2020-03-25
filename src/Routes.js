import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import ProductList from './Pages/ProductListing/ProductList';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/Details/:productId/:category" component={ProductDetails} />
                </Switch>
            </Router>
        )
    }
}