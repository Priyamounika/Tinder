import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../components/assets/tin.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 640, // Adjust as needed
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container mx-auto my-5">
        <div className="">
          <Slider {...settings}>
            <div className="relative">
              {" "}
              <img src={img} alt="#" />
              <button></button>
            </div>
            <div>
              {" "}
              <img src={img} alt="#" />
              <button>
Here How
              </button>
            </div>
            <div>
              {" "}
              <img src={img} alt="#" />
              <button>Find Out More</button>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}