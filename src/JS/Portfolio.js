import React, { Component } from 'react';
import { Button } from 'antd';
import HorizontalScroll from 'react-scroll-horizontal'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



import '../CSS/portfolio.css';

export default class Portfolio extends Component {
    render() {
        const child = { width: `30em`, height: `100%` }
        return (
            <div className='horizontal-scroller'>
                <div className='card' style={{ height: '90vh', width: '1700px', backgroundColor: 'red' }}>xyz</div>
                <div className='card' style={{ height: '90vh', width: '1700px', backgroundColor: 'blue' }}>xyz</div>
                <div className='card' style={{ height: '90vh', width: '1700px', backgroundColor: 'black' }}>xyz</div>
                <div className='card' style={{ height: '90vh', width: '1700px', backgroundColor: 'green' }}>xyz</div>
                <div className='card' style={{ height: '90vh', width: '1700px', backgroundColor: 'yellow' }}>xyz</div>
                <div className='card' style={{ height: '90vh', width: '1700px', backgroundColor: 'aqua' }}>xyz</div>
                <div className='card' style={{ height: '90vh', width: '1700px', backgroundColor: 'brown' }}>xyz</div>
                <div className='card' style={{ height: '90vh', width: '1700px', backgroundColor: 'magenta' }}>xyz</div>
            </div>
        );
    }
}