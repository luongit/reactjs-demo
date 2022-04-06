import React, { Component } from 'react';
import { Button, Grid, Card } from '@material-ui/core'
import { Delete, Send } from '@material-ui/icons'
export default class Product extends Component {
    render() {
        return (
            <div className='page'>
                <Button variant="contained" size="small" color="primary">Primary</Button>
                <Button variant="contained" size="medium" color="success">Success</Button>
                <Button variant="contained" size="large" color="secondary.">Secondary</Button>
                <Button variant="outlined"  color='success'>Success</Button>
                <Button variant="outlined" startIcon={<Delete />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<Send />}>
                    Send
                </Button>
            </div>
        );
    }
}

