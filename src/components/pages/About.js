import React from 'react';
import Clock from '../Clock';

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>

            <Clock />
        </React.Fragment>
    )
}

export default About;