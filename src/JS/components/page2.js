import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import '../../CSS/main.css';

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
                    <div className="page2Text">
                        <Row type="flex" justify="start">
                            <Col span={12}>
                                <h1 className='QA'>TAGapp</h1>
                                <p className='TAGapp'>TAGapp is a mobile application that
                                    can be downloaded from iOS Appstore
                                    and Google Playstore. TAGapps helps to
                                    enhance your company in the new
                                    digital era
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