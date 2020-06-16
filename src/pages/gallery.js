import React from "react";
import ImagesContainer from "../components/imagesContainer";
import BackToTop from '../components/backToTop';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";

const Images = () => {
  return (
    <>
      <ToolBar id='back-to-top-anchor' style={{marginTop:-65}}/>
      <div style={{display: 'flex', width: '100%', justifyContent:'center'}}>
        <div style={{marginTop: 130, display:'flex', marginBottom:-25 }}>
          <Typography variant='h3' color='textPrimary'>
            Gallery
          </Typography>
        </div>
      </div>
      <ImagesContainer />
      <BackToTop />
    </>
  );
};
export default Images;