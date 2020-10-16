import React, { Component } from 'react';

class Clock extends Component {
    state = {
        clockin: '',
        clockout: ''
    }

    

    ClockinTime = () => {
        let currentTime = new Date ();
        let currentHours = currentTime.getHours ();
        let currentMinutes = currentTime.getMinutes ();
        let currentSeconds = currentTime.getSeconds ();
    
        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
        currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    
        let timeOfDay = (currentHours < 12 ) ? "AM" : "PM";
        currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
        currentHours = ( currentHours === 0 ) ? 12 : currentHours;
    
        let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

        this.setState({clockin: currentTimeString});
    }

    ClockoutTime = () => {
        let currentTime = new Date ();
        let currentHours = currentTime.getHours ();
        let currentMinutes = currentTime.getMinutes ();
        let currentSeconds = currentTime.getSeconds ();
    
        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
        currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    
        let timeOfDay = (currentHours < 12 ) ? "AM" : "PM";
        currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
        currentHours = ( currentHours === 0 ) ? 12 : currentHours;
    
        let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

        this.setState({clockout: currentTimeString});
    }

    render() {
        return (
            <div>
                <h1> Hello World</h1>
                <button onClick={ this.ClockinTime }>Clock-in</button>
                <p>Clock-in Time: {this.state.clockin} </p>
                <button onClick={ this.ClockoutTime }>Clock-in</button>
                <p>Clock-out Time: {this.state.clockout} </p>
            </div>
        )
    };
};

export default Clock;