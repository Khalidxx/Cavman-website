import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Button } from 'antd';

import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Page5 from './components/page5';

import styles from '../CSS/main.css';

export default class MainApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll: false,
            view: 1,
            lastScrollPos: document.body.scrollTop,
            scrollCount: 0,
            transitionName: "page"
        }
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
        this.transition = this.transition.bind(this);
    }

    renderView() {
        if (this.state.view == 1) {
            return <Page1 key={1} />
        }
        else if (this.state.view == 2) {
            return <Page2 key={2} />
        }
        else if (this.state.view == 3) {
            return <Page3 key={3} />
        }else if (this.state.view == 4) {
            return <Page4 key={4} />
        }
        else if (this.state.view == 5) {
            return <Page5 key={5} />
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollEvent);
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollEvent);
    }

    transition() {
        if (window.scrollY > this.state.lastScrollPos && this.state.view != 5) {
            this.setState({ view: this.state.view + 1 , transitionName: "page"});
            window.scrollTo(0, 1);
        }
        else if (window.scrollY < this.state.lastScrollPos && this.state.view != 1) {
            this.setState({ view: this.state.view - 1 , transitionName: "pageUp"});
            window.scrollTo(0, 1);
        }
        this.setState({ scroll: true, lastScrollPos: window.scrollY })

    }

    handleScrollEvent() {
        setTimeout(this.transition, 100);
    }
    render() {
        return (
            <div ref='container'>
                <ReactCSSTransitionGroup
                    key={1}
                    transitionName={this.state.transitionName}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>
                    {this.renderView()}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
