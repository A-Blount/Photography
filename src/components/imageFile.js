import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/bg1.jpg";
import PropTypes from "prop-types";
import { memo } from "react";

const ImageFile = memo(({ image }) => {
  const { name, slug, images } = image;
  // console.log(name);
  return (
    <article style={{textAlign:'center'}} >
      <div className='img-container' >
        <img src={images[0] || defaultImg} alt="Gallery" style={{
          display: 'block',
          width: "100%",
          height: 320,
          objectFit: 'cover'
        }}/>
        <Link to={`/gallery/${slug}`}  className='room-link' style={{
          textDecoration: 'none',
          color: '#222',
          border: '2px solid rgb(255, 204, 0)',
          backgroundColor: 'rgba(255, 255, 255, .8)',
          padding: 7,
          borderRadius: 3
        }}>
          Description
        </Link>
      </div>
      <p style={{textTransform:'capitalize'}}>{name}</p>
    </article>
  );
});

ImageFile.propTypes = {
    image: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
};
export default ImageFile;