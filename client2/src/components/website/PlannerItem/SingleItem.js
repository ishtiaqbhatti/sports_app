import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import Modal from "react-modal";
import isEmpty from "../../../utils/is-empty";
import Facebook from "./icons/facebook.svg";
import Instagram from "./icons/instagram.svg";
import LinkedIn from "./icons/linkedin.svg";
import Twitter from "./icons/twitter.svg";
import WWW from "./icons/www.svg";
import Youtube from "./icons/youtube.svg";
import PlaceHolderImage from "../../../img/images/package-img.jpg";

class SingleItem extends Component {
  state = {
    isOpen: false,
    items: []
  };

  setModalOpen = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };
  render() {
    if (!this.props.plannerItem) {
      return <div>Loading</div>;
    }

    const { t } = this.props;
    const {
      cateringCapacity,
      categories,
      eventTypes,
      description,
      targetMarket,
      phoneNo1,
      phoneNo2,
      mobileNo,
      instaAdress,
      youtubeAdress,
      twitterAdress,
      fbAdress,
      website,
      linkdnAdress,
      images,
      storeName
    } = this.props.plannerItem;

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "1100px",
        height: "650px"
      }
    };

    //React Hooks
    // const [modalIsOpen, setPhotoIndex] = useState(0);

    const imageValues = !isEmpty(images) ? Object.values(images) : "";
    const renderModalImages = imageValues => {
      let items = [];
      for (let i = 0; i < imageValues.length; i++) {
        if (imageValues[i]) {
          items.push({
            original: imageValues[i],
            originalClass: "react-img-gallery"
          });
        }
      }
      this.setState({ items, isOpen: true });
    };

    const targetMarketStyling = tmarket => {
      if (tmarket === "up") return t.upMarket;
      if (tmarket === "mix") return t.marketMix;
      if (tmarket === "stream") return t.mainStream;
    };

    return (
      <div className="package-thumb-wrap ">
        <div className="package-thumb-header row">
          <div className="col">
            <h6>
              <strong>{storeName}</strong>
              {t.canCater + " "}
              <span className="nub-count">
                [{cateringCapacity ? cateringCapacity : null}]
              </span>{" "}
              {t.guest}
            </h6>
            <div className="rating_down">
              <div style={{ width: "80%" }} className="rating_up" />
            </div>
          </div>
          <div className="col">
            <div className="small-btn-wrap text-right">
              {categories
                ? categories.map((category, key) => (
                    <button type="submit" className="badge">
                      {category.label}
                    </button>
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="package-thumb-caption">
              <h5>{t.description}</h5>
              <p>{description ? description : null}</p>
            </div>
            {this.props.userType === "planner" ? (
              <div className="post-meta">
                <h5>{t.eventTpye}</h5>
                <ul>
                  {eventTypes
                    ? eventTypes.map((eventType, key) => (
                        <li>
                          <a>{eventType.label}</a>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            ) : null}
          </div>
          {imageValues ? (
            <div className="col-md-6">
              <button
                type="button"
                className="package-img-thumb"
                onClick={() => renderModalImages(imageValues)}
              >
                <img src={imageValues[0]} alt="First" />
              </button>
            </div>
          ) : (
            <div className="col-md-6">
              <img src={PlaceHolderImage} alt="planner-directory-placeholder" />
            </div>
          )}
        </div>
        <div className="package-thumb-footer">
          <div className="row">
            <div className="col-md-6">
              <ul className="contact-list">
                {phoneNo1 && (
                  <li>
                    <span style={{ paddingRight: "0.4rem" }}>
                      <i class="fa fa-phone" />
                    </span>
                    {phoneNo1}
                  </li>
                )}

                {phoneNo2 && (
                  <li>
                    <span style={{ paddingRight: "0.4rem" }}>
                      <i class="fa fa-phone" />
                    </span>
                    {phoneNo2}
                  </li>
                )}
                {mobileNo && (
                  <li>
                    <span style={{ paddingRight: "0.4rem" }}>
                      <i class="fa fa-phone" />
                    </span>
                    {mobileNo}
                  </li>
                )}
              </ul>
              {/* <div className="small-btn-wrap text-left">
                <div className="badge">Logos </div>
                <div className="badge logo-badge">
                  <span
                    className="flag-icon"
                    style={{ backgroundImage: "url(images/flag-logo.png)" }}
                  />
                </div>
              </div> */}
            </div>
            <div className="col-md-6">
              <div className="text-right">
                <ul className="contact-list social-list">
                  {website ? (
                    <li>
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={WWW} alt="Website Adress" />
                      </a>
                    </li>
                  ) : null}
                  {fbAdress ? (
                    <li>
                      <a
                        href={fbAdress}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className=""
                          src={Facebook}
                          alt="Facebook Addres"
                        />
                      </a>
                    </li>
                  ) : null}
                  {twitterAdress ? (
                    <li>
                      <a
                        href={twitterAdress}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Twitter} alt="LinkedIn Adress" />
                      </a>
                    </li>
                  ) : null}
                  {linkdnAdress ? (
                    <li>
                      <a
                        href={linkdnAdress}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={LinkedIn} alt="LinkedIn Adress" />
                      </a>
                    </li>
                  ) : null}

                  {instaAdress ? (
                    <li>
                      <a
                        href={instaAdress}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Instagram} alt="Instagram Adress" />
                      </a>
                    </li>
                  ) : null}
                  {youtubeAdress ? (
                    <li>
                      <a
                        href={youtubeAdress}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Youtube} alt="Instagram Adress" />
                      </a>
                    </li>
                  ) : null}
                </ul>
                <span className={targetMarket}>
                  {targetMarketStyling(targetMarket)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={() => this.closeModal()}
          style={customStyles}
          overlayClassName="react-modal-overlay"
        >
          <ImageGallery
            items={this.state.items}
            showBullets={true}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={true}
            infinite={false}
            slideDuration={100}
            onImageError={PlaceHolderImage}
          />
        </Modal>
      </div>
    );
  }
}

export default SingleItem;
