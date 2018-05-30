import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainApp from './App';
import Portfolio from './Portfolio'


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={MainApp} />
            <Route path="/portfolio" component={Portfolio} />
        </div>
    </Router>, 
    document.getElementById('app')
)