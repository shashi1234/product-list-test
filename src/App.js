import React, { Component} from "react";
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import "./style/style.css";
import Routes from './Routes';

class App extends Component{
    render(){
        return(
            <Router>
                <div className="App">
                    <Routes />
                </div>
            </Router>
        );
    }
}

export default App;