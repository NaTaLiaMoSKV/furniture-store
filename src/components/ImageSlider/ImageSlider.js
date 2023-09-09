import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Создайте CSS-файл для стилизации
import '../Updates/Updates.module.css'

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true, // Включение свайпа мышкой
    draggable: true, // Разрешение перетаскивания
    };
    
    const images = [
        'https://i.pinimg.com/564x/98/33/d1/9833d139f2c1c798c6f34b98fd9a1bc4.jpg',
        'https://i.pinimg.com/564x/87/86/b6/8786b638e74f6ba000232e2c135c78a1.jpg',
        'https://i.pinimg.com/564x/00/37/57/003757250e53be5ae9ab32a8bbcc79cb.jpg',
        'https://i.pinimg.com/564x/9d/eb/92/9deb92df2ddceaa063f9a98627d85445.jpg',
        'https://i.pinimg.com/564x/83/19/3f/83193f806181ddb79c8d5190c984d87b.jpg',
        'https://i.pinimg.com/564x/bd/87/18/bd871809abd7e2d85ccbcf3bf35f9ee1.jpg',
        'https://i.pinimg.com/564x/45/00/dc/4500dc07d5e54c2d83325fd34d5e0101.jpg',
        'https://i.pinimg.com/564x/c3/54/81/c35481db63edee133596caa180e9ae53.jpg'
    ]

  return (
    <div className="image-slider updatesImages">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className='updatesImage' src={image} alt='design' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
