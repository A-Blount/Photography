import React, { Component } from "react";
import items from "./utils/tileData";
import Client from "./contentful";

const ImageContext = React.createContext();
export default class ImageProvider extends Component {
  state = {
    images: [],
    sortedImages: [],
    featuredImages: [],
    loading: true,
    type: "All",
  };
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "galleryImages"
      })
      let images = this.formatData(response.items);
      let featuredImages = images.filter(image => image.featured === true);
      this.setState({
        images,
        featuredImages,
        sortedImages: images,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getData();
    let images = this.formatData(items);
    let featuredImages = images.filter(image => image.featured === true);
    this.setState({
      images,
      featuredImages,
      sortedImages: images,
      loading: false,
    });
  };
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let image = { ...item.fields, images, id };
      return image;
    });
    return tempItems;
  };
  getImage = slug => {
    let tempImages = [...this.state.images];
    const image = tempImages.find(image => image.slug === slug);
    return image;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);
    this.setState(
      {
        [name]: value
      },
      this.filterImages
    );
  };
  filterImages = () => {
    let {
      images,
      type,
    } = this.state;
    let tempImages = [...images];
    if (type !== "All") {
      tempImages= tempImages.filter(image => image.type === type);
    }
    this.setState({
      sortedImages: tempImages
    });
  };
  render() {
    return (
      <ImageContext.Provider
        value={{
          ...this.state,
          getImage: this.getImage,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ImageContext.Provider>
    );
  }
}
const ImageConsumer = ImageContext.Consumer;
export { ImageProvider, ImageConsumer, ImageContext };
export function withImageConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ImageConsumer>
        {value => <Component {...props} context={value} />}
      </ImageConsumer>
    );
  };
}