import React from "react";
import { withImageConsumer } from "../context";
import Loading from "./loading";
import ImagesFilter from "./imagesFilter";
import ImagesList from "./imagesList";

function ImageContainer({ context }) {
  const { loading, sortedImages, images } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ImagesFilter images={images} />
      <ImagesList images={sortedImages} />
    </>
  );
}
export default withImageConsumer(ImageContainer);
