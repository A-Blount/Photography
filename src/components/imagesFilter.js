import React from "react";
import { useContext } from "react";
import { ImageContext } from "../context";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const ImagesFilter = ({ images }) => {
  // react hooks
  const context = useContext(ImageContext);
  const {
    handleChange,
    type
  } = context;

  // get unique types
  let types = getUnique(images, "type");
  // add all
  types = ["All", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section style={{
      padding: '1rem 0'
    }}>
      <form style={{
         width: '30vw',
         margin: '0 auto',
         marginBottom: -25
      }}>
        <div style={{
          textTransform: 'capitalize'
        }}>
          <label htmlFor="type" style={{
            display: 'block',
            marginBottom: '0.75rem',
          }}>Image Type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            value={type}
            style={{
              width: '100%',
              background: 'transparent',
              fontSize: '1rem',
              padding: '.5rem',
              borderRadius: '4px'
            }}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  );
};
export default ImagesFilter;