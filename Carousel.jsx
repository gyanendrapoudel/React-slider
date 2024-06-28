import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from "react";
import Slider from "react-slick";
import list from './src/data';
import { FaQuoteRight } from 'react-icons/fa6'

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade:true, // can only use for slidesToScroll:1 only
    autoplay:true,
    autoplaySpeed:1000,
    pauseOnHover:true,

  };
  return (
    <div className="slick-container">
      <Slider {...settings}>
        {list.map((person, personIndex) => {
          const { id, name, title, image, quote } = person
          return (
            <article
             
              key={person.id}
              
            >
              <img src={image} alt="PP" className="image" />
              <div className="name">{name}</div>
              <div className="title">{title}</div>
              <div className="quote">{quote}</div>
              <div className=" icons-quote">
                <FaQuoteRight />
              </div>
            </article>
          )
        })}
      </Slider>
    </div>
  )
}


  

export default Carousel
