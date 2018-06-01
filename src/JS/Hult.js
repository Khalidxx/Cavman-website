import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../CSS/portfolio.css';

export default class Hult extends Component {
    render() {
        return (
            <div className='horizontal-scroller'>
                <div className='card'>
                    <Col span={12} offset={6}>
                        <img src="./src/Assets/lokLogo1.png" style={{ width: '200px', height: 'auto', marginTop: '20vh' }} />
                        <h2 style={{ marginTop: '10vh' }}>Hult Prize</h2>
                        <p>
                            Event photography for Hult<br />
                            Prize, Kuala Lumpur regionals
                        </p>
                    </Col>
                </div>
                <div className='Hult1' style={{ height: '100vh', width: '100%' }} />
                <div className='card'>
                    <Col span={23} offset={1} >
                        <Row type="flex" justify="start">
                            <img src="./src/Assets/DSC_0001 copy.jpg" style={{ width: 'auto', height: '50vh', marginTop: '7vh' }} />
                        </Row>
                        <Row>
                            <Col span={9}>
                                <img src="./src/Assets/DSC_0395 copy.jpg" style={{ width: 'auto', height: '35vh', marginTop: '5vh' }} />
                            </Col>
                            <Col span={11}>
                                <img src="./src/Assets/DSC_0238 copy.jpg" style={{ width: 'auto', height: '35vh', marginTop: '5vh' }} />
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div className='card'>
                    <Row type="flex" justify="left">
                        <Col span={12}>
                            <img src="./src/Assets/DSC_02867 copy.jpg" style={{ width: 'auto', height: '85vh', marginTop: '7vh' }} />
                        </Col>
                        <Col span={12}>
                            <img src="./src/Assets/DSC_0033 copy.jpg" style={{ width: 'auto', height: '85vh', marginTop: '7vh' }} />
                        </Col>
                    </Row>
                </div>
                <div className='card'>
                    <img src="./src/Assets/DSC_0402 copy.jpg" style={{ width: 'auto', height: '85vh', marginTop: '7vh' }} />
                </div>
                <div className='card'>
                    <Row type="flex" justify="left">
                        <Col span={12}>
                            <img src="./src/Assets/DSC_0005 copy.jpg" style={{ width: '60vh', height: '40vh', marginTop: '7vh' }} />
                        </Col>
                        <Col span={12}>
                            <img src="./src/Assets/DSC_0194 copy.jpg" style={{ width: '60vh', height: '40vh', marginTop: '7vh' }} />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <img src="./src/Assets/DSC_0234 copy.jpg" style={{ width: '60vh', height: '40vh', marginTop: '7vh' }} />
                        </Col>
                        <Col span={12}>
                            <img src="./src/Assets/DSC_0004 copy.jpg" style={{ width: '60vh', height: '40vh', marginTop: '7vh' }} />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
