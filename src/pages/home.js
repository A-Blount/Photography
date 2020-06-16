import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Guy from '../images/guy.jpg';
import Avatar from '@material-ui/core/Avatar';
import BG from '../images/bg.jpg';
import BG1 from '../images/bg1.jpg';
import Banner from '../components/banner';
import Typography from '@material-ui/core/Typography';
import MyButton from '../utils/myButton';
import CameraIcon from '@material-ui/icons/LocalSeeRounded';
import MailIcon from '@material-ui/icons/MailRounded';
import {Link} from 'react-router-dom';
import Services from '../components/services';
import BackToTop from '../components/backToTop';
import ToolBar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    ...theme.spreadThis,
    container: {
        flexShrink: 1,
        display:'flex',
        width: '100%',
        height: '100%',
        padding: theme.spacing(16,0),
        background: `url(${BG}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        objectFit: 'cover',
        marginTop: 63.85,

        [theme.breakpoints.down('md')] : {
            height: '100%'
        }
    },
    container1: {
        flexShrink: 1,
        display:'flex',
        width: '100%',
        height: '100%',
        background: `url(${BG1}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        objectFit: 'cover',
        padding: theme.spacing(10,0),
        [theme.breakpoints.down('sm')] : {
            height: '150%'
        }
    },
    avatar: {
        marginTop: theme.spacing(3),
        width: 250,
        height: 250,
        border: '5px solid white',
        marginBottom:theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            width: 200,
            height: 200
        }
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        padding: theme.spacing(1),
        textShadow: '2px 2px 3px black'
    },
    button: {
        margin: theme.spacing(3),
        color: 'white',
        borderColor: ' #ffcc00',
    }
}));
function Home() {
    const classes = useStyles();
    return (
        <>
        <ToolBar id='back-to-top-anchor' style={{marginTop:-65}}/>
        <Box className={classes.container}>
            <Grid container direction='row-reverse' wrap='wrap'>
                <Grid item xs={12} sm={6} className={classes.gridItem}>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Typography 
                            variant='h4' 
                            align='center' 
                            className={classes.text}>
                                A. Blount Photography
                            </Typography>
                        <Avatar alt='alt' src={Guy} className={classes.avatar} />
                        <Typography 
                            variant='subtitle1' 
                            align='center' 
                            className={classes.text}>
                                "A favorite quote of yours or something here about yourself"
                            </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.gridItem}>
                    <Banner  title='High Quality Proffessional Photography' subtitle='Studio Quality / HD Prints / Editing and Digital Restorations / Serving all of Palm Beach County, Martin County, Broward County, and most of South Florida. Call for details'>
                        <Box  display='flex' flexDirection='row' width='100%' justifyContent='center'>
                            <Link to='/gallery' style={{textDecoration:'none'}}>
                            <MyButton placement='top' button='View Gallery' tip='View Gallery' btnClassName={classes.button}>
                                <CameraIcon/>
                            </MyButton>
                            </Link>
                            <Link to='/contact' style={{textDecoration:'none'}}>
                            <MyButton placement='top' button='Contact' tip='Contact' btnClassName={classes.button} >
                            <MailIcon/>
                            </MyButton>
                            </Link>
                        </Box>
                    </Banner> 
                </Grid>
            </Grid>
        </Box>
        <Box display='flex' className={classes.container1}>
            <Services />
        </Box>
        <BackToTop />
        </>
    )
}
export default Home;