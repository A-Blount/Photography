import React from 'react'
import BG2 from '../images/bg2.jpg'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PhoneLogo from '@material-ui/icons/PhoneRounded';
import EmailLogo from '@material-ui/icons/EmailRounded';

const useStyles = makeStyles((theme)=> ({
    root: {
        marginTop: '100px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height: 'calc(100vh - 100px)',
        background: `url(${BG2}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        objectFit: 'cover',
    },
    paper: {
        display: 'flex',
        flexDirection:'column',
        flexWrap:'nowrap',
        width: '60%',
        justifyContent: 'center',
        padding: theme.spacing(3),
        marginBottom: theme.spacing(5)
    },
    textfield: {
        marginBottom: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(2),
    }
}))
function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
            <Typography color='textPrimary' variant='h4' align='center'>Contact</Typography>
            <br/>
            <Typography variant='h6' align='center' gutterBottom color='textPrimary'>
                For Scheduling and/or details on pricing and availibility. Please reach me by one of the following methods, or through the social media links above. Thankyou
            </Typography>
            <br/>
            <div style={{display:'flex', flexDirection:'column', flexWrap:'nowrap', justifyContent:'center',}}>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'nowrap', justifyContent:'center', alignItems:'center'}}>
            <Typography variant='h6'>
                Email: AnthonyBlountPhotography@gmail.com 
            </Typography>
            <EmailLogo style={{paddingLeft: 25}}/>
            </div>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'nowrap', justifyContent:'center', alignItems:'center'}}>
            <Typography variant='h6'>
                Phone: 555-555-555 
            </Typography>
            <PhoneLogo style={{paddingLeft: 25}}/>
            </div>
            </div>
            </Paper>
        </div>
    )
};
export default Contact;
