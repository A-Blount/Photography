import React, { Component } from "react";
import defaultBcg from "../images/bg2.jpg";
import { Link } from "react-router-dom";
import { ImageContext } from "../context";
import StyledHero from "../components/styledHero";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

export default class GalleryImage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = ImageContext;

  render() {
    window.scrollTo(0, 0);
    const { getImage } = this.context;
    const image = getImage(this.state.slug);
    if (!image) {
      return (
        <div>
          <h3> no such image could be found...</h3>
          <Link to="/gallery" className="btn-primary">
            back to gallery
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      images
    } = image;
    const [...defaultImages] = images;
    console.log(defaultImages);

    return (
      <div style={{marginTop: -5, display: 'flex', justifyContent: 'center', flexDirection:'column', marginBottom: 50 }} >
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <div style={{marginTop: 400}}/>
        </StyledHero>
        <Box margin={0} display='flex' flexDirection='column' justifyContent='center' style={{minWidth:'90vw'}}>
          <Typography align='center' style={{padding:20}}>
          {name}
          <br />
            <Link to="/gallery" style={{ marginTop: 20}}>
              back to gallery
            </Link>
          </Typography>
        </Box>
        <section style={{padding: 20}}>
          <div>
            <article style={{marginTop: '-50px'}}>
              <h3>Description</h3>
              <p>{description}</p>
            </article>
          </div>
        </section>
      </div>
    );
  }
}