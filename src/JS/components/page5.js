import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import '../../CSS/main.css';

export default class Page5 extends Component {
    render() {
        return (
            <div className='a5'>
                <ReactCSSTransitionGroup
                    key={1}
                    transitionName="scrl"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className="page3Text">
                        <Row type="flex" justify="end">
                            <Col span={12}>
                                <h1 className='MAppHead'>Photography & Cinematography</h1>
                                <p className='MApp'>Both are techniques to capture
                                    recious, unforgettable, and important moments
                                </p>
                                <Link to='/portfolio'><Button className="a3Button"> See More </Button></Link>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}