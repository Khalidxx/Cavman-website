import React, { Component } from 'react';
import { Button } from 'antd';


import styles from '../CSS/main.css';

export default class Page2 extends Component {
    render(){
        return(
            <div ref="a2" className='a2'>
                    <h1 className='hello'>Having Fun?</h1>
                    <Button type='primary'> Hello </Button>
                    <Button> Goodbye </Button>
                </div>
        );
    }
}