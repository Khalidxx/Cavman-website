import React, { Component } from 'react';
import { Button } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import '../CSS/main.css';

export default class Page2 extends Component {
    render() {
        return (
            <div ref="a2" className='a2'>
                <ReactCSSTransitionGroup
                    key={1}
                    transitionName="scrl"
                    transitionAppear={true}
                    transitionAppearTimeout={1300}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <h1 className='hello'>Welcome to React!</h1>
                </ReactCSSTransitionGroup>
                <Button type='primary'> Hello </Button>
                <Button> Goodbye </Button>
            </div>
        );
    }
}