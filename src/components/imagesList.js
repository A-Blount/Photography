import React from "react";
import ImageFile from "./imageFile";
const ImagesList = ({ images }) => {
  if (images.length === 0) {
    return (
      <div>
        <h3>Unfortunately no images matched your search parameters.</h3>
      </div>
    );
  }
  return (
    <section style={{padding: '5rem 0'}}>
      <div style={{
        width: '80vw',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
        gridRowGap: '2rem',
        gridColumnGap: '30px',
      }}>
        {images.map(item => {
          return <ImageFile key={item.id} image={item} />;
        })}
      </div>
    </section>
  );
};
export default ImagesList;