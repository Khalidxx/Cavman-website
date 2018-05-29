import React, { Component } from 'react';

export default class Head extends Component {
    render() {
        if (this.props.scroll) {
            return (<h1 className='hello'>Welcome to React!</h1>);
        }
        return null;
    }
}
