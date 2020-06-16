import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import FaceBookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Logo from '../images/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttons: {
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
  },
  menuIcon: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
          display: 'block',
      }
  },
  bottomNav: {
    position:'fixed',
    flexGrow:1,
    zIndex:90,
    top: 60,
    backgroundColor:'#333',
    [theme.breakpoints.down('sm')] :{
        top: 48.5,
    },
    [theme.breakpoints.down('lg')] :{
        top: 48.5,
    }
  }
}));
export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color='transparent' style={{backgroundColor:'#f3f3f3', zIndex: 100,}}>
        <Toolbar>
          <div style={{display:'flex', width:'100%'}}>
          <img src = {Logo} alt="logo" style={{
            height: 50,
            width: 175
          }}/>
          </div>
          <Box className={classes.buttons}>
            <Button color='inherit' component={Link} to='/'>Home</Button>
            <Divider orientation='vertical' flexItem />
            <Button color="inherit" component={Link} to='/contact'>Contact</Button>
            <Divider orientation='vertical' flexItem />
            <Button color="inherit" component={Link} to='/gallery'>Gallery</Button>
          </Box>
          <IconButton className={classes.menuIcon} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to='/'>Home</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/contact'>Contact</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/gallery'>Gallery</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
      <AppBar className={classes.bottomNav}  position='fixed' >
        <Toolbar variant='dense'>
        <Box display='flex' flexGrow={1} justifyContent='center'style={{color:'white'}}  marginTop={2} alignItems='center' flexDirection='row' flexWrap='nowrap'>
            <Typography variant='subtitle2' color='inherit' >Find Me On:</Typography>
            <IconButton >
                <FaceBookIcon style={{color:'white'}} />
            </IconButton>
            <IconButton >
                <InstagramIcon style={{color:'white'}} />
            </IconButton>
            <IconButton >
                <LinkedInIcon style={{color:'white'}} />
            </IconButton>
        </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};