import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../CSS/portfolio.css';

export default class Portfolio extends Component {
    render() {
        return (
            <div className='horizontal-scroller'>
                <div className='card1' style={{ height: '100vh', width: '100%' }}>
                    <Col span={12} offset={2}>
                        <Row>
                            <img src="./src/Assets/lokLogo1.png" className="logo" />
                        </Row>
                        <Row>
                            <div>
                                <h1>Photography & Cinematography</h1>
                                <p>
                                    Photography and Cinematography are both techniques,
                                    skills or a method to capture<br /> a moment that people
                                    wanted to last forever. "A good snapshot keeps a moment<br />
                                    from running away" - Eudora Welty. Every single photo and
                                    video conveys different stories<br /> to the audience. Hence,
                                    we would like provide a service that can capture your very<br />
                                    special moment and make it a story that can last forever
                                </p>
                            </div>
                        </Row>
                    </Col>
                </div>
                <div className='card'>
                    <Col span={20} offset={2}>
                        <div style={{ textAlign: 'center' }}>
                            <img style={{ width: 'auto', height: '50vh', marginTop: '15vh', marginLeft: '10vh' }} src="./src/Assets/DSC_0286 copy.jpg" />
                            <Link to='/Nizam'><h2><u>Nizam & Bella</u></h2></Link>
                            <p>
                                Wedding photography for Nizam and Bella<br />
                                Bersanding (Wedding Reception)
                        </p>
                        </div>
                    </Col>
                </div>
                <div className='card' style={{ backgroundColor: '#474b38' }}>
                    <Col span={20} offset={2}>
                        <div style={{ textAlign: 'center' }}>
                            <img style={{ width: 'auto', height: '50vh', marginTop: '15vh' }} src="./src/Assets/cover.jpg" />
                            <Link to='/Hult'><h2 style={{ color: 'white' }}><u>Hult Prize</u></h2></Link>
                            <p style={{ color: 'white' }}>
                                Kuala Lumpur Regionals
                        </p>
                        </div>
                    </Col>
                </div>
                <div className='card'>
                    <Col span={20} offset={2}>
                        <div style={{ textAlign: 'center' }}>
                            <img style={{ width: 'auto', height: '50vh', marginTop: '15vh' }} src="./src/Assets/olBundle.jpg" />
                            <Link to='/OlBundle'><h2><u>OL.BUNDLE</u></h2></Link>
                            <p>
                                Product photography<br />
                                Commercial video shooting
                        </p>
                        </div>
                    </Col>
                </div>

            </div>
        );
    }
}


// import React, { Component } from 'react'
// import HorizontalScroll from 'react-scroll-horizontal'

// export default class ScrollingHorizontally extends Component {
//     render() {
//         const child = { width: `300em`, height: `100%` }
//         return (
//             <body>
//                 <HorizontalScroll>
//                     ()=>{

//                         <div style={child} />
//                     }
//                 </HorizontalScroll>
//             </body>

//         )
//     }
// }