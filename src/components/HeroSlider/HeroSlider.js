import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import css from '../../components/Hero/Hero.module.css'

import sprite from '../../images/symbol-defs.svg'

const livingRoomImage = 'https://www.bhg.com/thmb/Ke48CUYRrXfAc_CJP4eXuZsrWkw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg';

export default class SimpleSlider extends Component {
    
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      };
      
    return (
      <div>
        <Slider {...settings}>
          <li >
                <img className={css.galleryImage} src={livingRoomImage} alt='living room' />
                <div className={css.galleryDescriptionContainer}>
                    <p className={css.galleryName}>Living Room</p>
                    <p className={css.galleryCount}>250+ items</p>
                    <button type='button' className={css.galleryButton}>
                        <svg className={css.galleryIcon} width={25} height={25}>
                            <use href={sprite + '#icon-arrow'}></use>
                        </svg>
                    </button>
                </div>
            </li>
            <li >
                <img className={css.galleryImage} src={livingRoomImage} alt='living room' />
                <div className={css.galleryDescriptionContainer}>
                    <p className={css.galleryName}>Living Room</p>
                    <p className={css.galleryCount}>250+ items</p>
                    <button type='button' className={css.galleryButton}>
                        <svg className={css.galleryIcon} width={25} height={25}>
                            <use href={sprite + '#icon-arrow'}></use>
                        </svg>
                    </button>
                </div>
            </li>
        </Slider>
      </div>
    );
  }
}