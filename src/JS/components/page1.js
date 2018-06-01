import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import '../../CSS/main.css';

export default class Page1 extends Component {
    render() {
        return (
            <div className='a1'>
                <ReactCSSTransitionGroup
                    key={1}
                    transitionName="scrl"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <h1 className='hello'>Creative, Innovative, Determinative</h1>
                    <Link to='/portfolio'><Button className="a1Button"> See More </Button></Link>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}