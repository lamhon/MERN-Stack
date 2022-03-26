import React, {useState, useContext} from 'react';
import Content from './Content';
import {GlobalState} from '../../.././GlobalState';

function About() {
    const value = useContext(GlobalState);
    return (
        <>
            <Content />
        </>
    );
}

export default About;