import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Button } from 'antd';

import Page1 from './page1';
import Page2 from './page2';
//import Head from './head';
import styles from '../CSS/main.css';

export default class MainApp extends Component {

        constructor(props) {
            super(props);
            this.state = {
                scroll: false,
                view: 'home'
            }
        }

        renderView() {
            if (this.state.view == 'home') {
                return <Page1 key={1}/>
            }
            else if (this.state.view == 'page') {
                return <Page2 key={2}/>
            }
        }

        componentDidMount() {
            window.addEventListener('scroll', this.handleScrollEvent);
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScrollEvent);
        }

        handleScrollEvent() {
            console.log('Scroll event at position: ' + window.scrollY);
            this.setState({ scroll: true })
            if (window.scrollY > 3) {
                this.setState({ view: 'page' });
            }
        }
        render() {
            this.handleScrollEvent = this.handleScrollEvent.bind(this);
            return (
                <div>
                    {/* <Page2 /> */}
                    {/* <div className='a1'>
                        <ReactCSSTransitionGroup
                            key={1}
                            transitionName="page"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
                            <h1 className='hello'>Welcome to React!</h1>
                        </ReactCSSTransitionGroup>
                        <Button type='primary'> Hello </Button>
                        <Button> Goodbye </Button>
                    </div> */}
                    <ReactCSSTransitionGroup
                        key={1}
                        transitionName="page"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        {this.renderView()}
                    </ReactCSSTransitionGroup>
                </div>
            );
        }
    }

//     constructor(props) {
//         super(props);
//         this.add = this.add.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             data: [],
//             name: ''
//         };
//     }
//     add() {
//         var arr = this.state.data.slice();
//         arr.push({ 'id': (new Date()).getTime(), 'name': this.state.name })
//         this.setState({ data: arr })
//     }
//     handleChange(e) {
//         this.setState({ name: e.target.value })
//     }
//     render() {
//         return (
//             <div>
//                 Enter Name <input onChange={this.handleChange} type="text" /> <input onClick={this.add} type="button" value="Add" />

//                     <ReactCSSTransitionGroup
//                         key={1}
//                         transitionName="page"
//                         transitionEnterTimeout={1000}
//                         transitionLeaveTimeout={1000}>
//                         {
//                             this.state.data.map(function (player) {
//                                 return <Page1 className='hh' key={player.id} />
//                             })
//                         }
//                     </ReactCSSTransitionGroup>

//             </div>
//         )
//     }
// }

render(<MainApp />, document.getElementById('app'));