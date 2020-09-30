import React from 'react';


const Scroll = (props) => {
    return (
     <div style ={{'overflow-y': 'scroll', border:'5px solid black', height: '100 px'}}>
         {props.children}
     </div>   
    )
};

export default Scroll;