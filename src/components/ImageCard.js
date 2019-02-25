import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 }; //initialising state to zero
    this.imageRef = React.createRef(); //assigning var to a ref
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    //adding an event listener here for when the image is loaded
  }

  setSpans = () => {
    //listener event that can access the image height
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
    //ES2015 syntax to use spans for key and value, should usually be this.setState({ spans: spans });
  };

  render() {
    const { description, urls } = this.props.image;
    //this is deconstruction, it's a method to assign variables to shorten references to longer paths, e.g. this.props.image.description is now shortend to description

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
