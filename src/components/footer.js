import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Appbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export class Footer extends Component {
    render() {
        return (
            <Appbar 
                component="footer" position="fixed"  style={{
                top: "auto", 
                bottom: 0,
                backgroundColor:"#f3f3f3",
                zIndex: 3,
                maxHeight:35
            }}>
                <Toolbar variant="dense" >
                    <Grid container justify='center'>
                        <Grid item xs={12}>
                            <Typography variant='subtitle1' align="center" color="textPrimary" gutterBottom>
                                All images © 2003-2010 Anthony Blount
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Appbar>
        )
    }
};
export default Footer; 
