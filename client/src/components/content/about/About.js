import React, {useState, useContext} from 'react';
import Banner from './Banner';
import Content from './Content';
import {GlobalState} from '../../.././GlobalState';

function About() {
    const value = useContext(GlobalState);
    return (
        <div>
            <Banner />
            <Content />
        </div>
    );
}

export default About;