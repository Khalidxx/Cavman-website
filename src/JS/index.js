import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainApp from './App';
import Portfolio from './Portfolio'
import Nizam from './Nizam';
import Hult from './Hult';
import OlBundle from './olBundle';
//import Vid1 from './components/vid1';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={MainApp} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/Nizam" component={Nizam} />
            <Route exact path="/Hult" component={Hult} />
            <Route exact path="/OlBundle" component={OlBundle} />
            {/* <Route exact path="/Vid1" component={Vid1} /> */}
        </div>
    </Router>, 
    document.getElementById('app')
)