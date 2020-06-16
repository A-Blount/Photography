import React from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Banner = ({ children, title, subtitle }) => {
  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' justifyContent='center' color='white' bgcolor='rgba(0, 0, 0, 0.9)' py={2} px={1}  margin={3} borderRadius={3}>
      <Typography variant='h4' align='center' gutterBottom style={{marginBottom: 20}}>{title}</Typography>
      <Typography variant='body1' align='center' gutterBottom>{subtitle}</Typography>
      {children}
    </Box>
  );
};
export default Banner;