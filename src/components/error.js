import React from 'react'
import Banner from '../components/banner';
import MyButton from '../utils/myButton';
import HomeIcon from '@material-ui/icons/HomeRounded';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
    },
    button: {
        color: "#fff",
        marginTop: 25,
    },
    link: {
        textDecoration: 'none',
    },
}));
function Error() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Banner title='Error 404:' subtitle='Page not found.'>
                <Link to="/" className={classes.link}>
                    <MyButton 
                        tip='Return Home' 
                        button='Return Home' 
                        btnClassName={classes.button} 
                        placement='bottom' 
                    >
                        <HomeIcon color='inherit'/>
                    </MyButton>
                </Link>
            </Banner>
        </div>
    )
}
export default Error; 