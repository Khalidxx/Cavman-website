import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../CSS/portfolio.css';

export default class Nizam extends Component {
    render() {
        return (
            <div className='horizontal-scroller'>
                <div className='card'>
                    <Col span={12} offset={6}>
                        <img src="./src/Assets/lokLogo1.png" style={{ width: '200px', height: 'auto', marginTop: '20vh' }} />
                        <h2 style={{ marginTop: '10vh' }}>Nizam & Bella</h2>
                        <p>
                            Wedding photography for Nizam<br />
                            and Bella during the Bersanding<br />
                            ceremony
                        </p>
                    </Col>
                </div>
                <div className='Nizam1' style={{ height: '100vh', width: '100%' }} />
                <div className='card'>
                    <Col span={23} offset={1} >
                        <Row type="flex" justify="start">
                            <img src="./src/Assets/DSC_0017 copy.jpg" style={{ width: 'auto', height: '50vh', marginTop: '7vh' }} />
                        </Row>
                        <Row>
                            <Col span={9}>
                                <img src="./src/Assets/DSC_0240 copy.jpg" style={{ width: 'auto', height: '35vh', marginTop: '5vh' }} />
                            </Col>
                            <Col span={11}>
                                <img src="./src/Assets/DSC_0259 copy.jpg" style={{ width: 'auto', height: '35vh', marginTop: '5vh' }} />
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div className='card'>
                    <Row type="flex" justify="start">
                        <Col span={12}>
                            <img src="./src/Assets/DSC_0195 copy.jpg" style={{ width: 'auto', height: '85vh', marginTop: '7vh' }} />
                        </Col>
                    </Row>
                </div>
                <div className='card'>
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <img src="./src/Assets/DSC_0290 copy.jpg" style={{ width: '60vh', height: '40vh', marginTop: '7vh' }} />
                        </Col>
                        <Col span={12}>
                            <img src="./src/Assets/DSC_0087 copy.jpg" style={{ width: '60vh', height: '40vh', marginTop: '7vh' }} />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <img src="./src/Assets/DSC_0121 copy.jpg" style={{ width: '60vh', height: '40vh', marginTop: '7vh' }} />
                        </Col>
                        <Col span={12}>
                            <img src="./src/Assets/DSC_0143 copy.jpg" style={{ width: '60vh', height: '40vh', marginTop: '7vh' }} />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
