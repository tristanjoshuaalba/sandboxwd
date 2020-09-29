import React from 'react';
import './Hello.css';

function Hello(props) {
    return (
        <div>
        <h1 class = 'f1 tc' > WHATS UP GUYS ? ? ? </h1>  
        <p  { props.greeting } </p>
        </div>
    );
}

export default Hello;