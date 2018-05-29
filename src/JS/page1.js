import React, { Component } from 'react';
import { Button } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import '../CSS/main.css';

export default class Page1 extends Component {
    render() {
        return (
            <div className='a1'>
                    <h1 className='hello'>Welcome to React!</h1>
                <Button type='primary'> Hello </Button>
                <Button> Goodbye </Button>
            </div>
        );
    }
}