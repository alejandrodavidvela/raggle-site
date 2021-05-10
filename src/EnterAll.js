import React from 'react'
import Button from '@material-ui/core/Button';
import './EnterAll.css'

function EnterAll() {
    return (
        <div className="button__all">
            <h3 className="title">Click below for random entry</h3>
            <Button variant="contained" color="primary">ENTER ALL</Button>
        </div>
    )
}

export default EnterAll
