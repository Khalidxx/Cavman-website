import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import '../../CSS/main.css';

export default class Page4 extends Component {
    render() {
        return (
            <div className='a4'>
                <ReactCSSTransitionGroup
                    key={1}
                    transitionName="scrl"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className="page2Text">
                        <Row type="flex" justify="start">
                            <Col span={12}>
                                <h1 className='QA'>Digital Interaction Installation</h1>
                                <p className='TAGapp'>Multiple channel interaction
                                    technology innovations and increasing preference 
                                    for self service brings about massive changes in the way 
                                    Contact Centers work
                                </p>
                                <Link to='/portfolio'><Button className="a2Button"> See More </Button></Link>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}