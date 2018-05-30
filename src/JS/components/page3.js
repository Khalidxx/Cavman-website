import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import '../../CSS/main.css';

export default class Page3 extends Component {
    render() {
        return (
            <div className='a3'>
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
                                <h1 className='MAppHead'>Mobile application Development</h1>
                                <p className='MApp'>Native programme for iOS
                                and Android platforms. Cavman provides end-to-end
                                services, which includes both customisable interface
                                design and servicing
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