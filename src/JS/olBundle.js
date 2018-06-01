import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../CSS/portfolio.css';

export default class OlBundle extends Component {
    render() {
        return (
            <div className='horizontal-scroller'>
                <div className='card'>
                    <Col span={12} offset={6}>
                        <img src="./src/Assets/lokLogo1.png" style={{ width: '200px', height: 'auto', marginTop: '20vh' }} />
                        <h2 style={{ marginTop: '10vh' }}>OL.BUNDLE</h2>
                        <p>
                            Peoduct photography and<br />
                            commercial video shooting<br />
                        </p>
                    </Col>
                </div>
                <div className='OlBundle1' style={{ height: '100vh', width: '100%' }} />
                <div className='card' style={{width: '60%'}}>
                    <img src="./src/Assets/insta1.jpg" style={{ width: 'auto', height: '80vh', marginTop: '10vh' }} />
                </div>
                <div className='card' style={{width: '60%'}}>
                    <img src="./src/Assets/insta2.jpg" style={{ width: 'auto', height: '80vh', marginTop: '10vh' }} />
                </div>
                <div className='card' style={{width: '60%'}}>
                    <img src="./src/Assets/insta3.jpg" style={{ width: 'auto', height: '80vh', marginTop: '10vh' }} />
                </div>
                <div className='card' style={{width: '60%'}}>
                    <img src="./src/Assets/insta4.jpg" style={{ width: 'auto', height: '80vh', marginTop: '10vh' }} />
                </div>
            </div>
        );
    }
}
