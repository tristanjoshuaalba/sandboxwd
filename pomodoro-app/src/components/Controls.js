import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Controller = () => {
    return ( 
        <div className = 'center tc w-75'>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" className = 'center tc'>
            <Button className = 'w-100'>Start</Button>
            <Button className = 'w-100'>Reset</Button>
            </ButtonGroup>
        </div>
    )
}

export default Controller;