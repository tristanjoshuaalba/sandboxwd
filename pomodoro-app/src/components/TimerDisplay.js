import React from 'react';


const TimerDisplay = ({focusTime, restTime}) => {

    
    return ( 
        <div className = 'tc bg-light-green br3 h5 pa4 ma3 w-90 center'>
            <h1> TimerDisplay </h1>
            <h2>{focusTime}</h2>
            <h2>{restTime}</h2>

        </div>
    )
}

export default TimerDisplay;