import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default ({ children, onClick, tip, btnClassName, tipClassName, button, placement,style}) => (
  <Tooltip title={tip} className={tipClassName} placement={placement}>
    <span >
    <Button variant='outlined' color='primary' onClick={onClick} className={btnClassName} style={{style}}>
           
            <Box display='flex' alignItems='center' justifyContent='space-between' minWidth='100%'>
            <Typography variant='inherit' style={{paddingRight: 3, paddingLeft:3}}>
            {button}
            </Typography>
            
            <Icon color='inherit' style={{paddingRight: 3, paddingLeft:3, marginBottom: 10}}>
            {children}
            </Icon>
            </Box>
       
    </Button>
    </span>
  </Tooltip>
);