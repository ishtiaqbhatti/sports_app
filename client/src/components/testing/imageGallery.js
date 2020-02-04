import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import Modal from "react-modal";

import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./images-gallery.css";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    originalClass: "myImg"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    originalClass: "myImg"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  }
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class ImageGaller extends Component {
  state = { modalIsOpen: false };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    //     return (
    //       <div className="centered">
    //         <ImageGallery items={images} />
    //       </div>
    //     );
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ImageGallery
            items={images}
            showBullets={true}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={true}
            infinite={false}
            slideDuration={100}
          />
        </Modal>
      </div>
    );
  }
}

export default ImageGaller;
