import css from './ReviewsSlider.module.css'
import heroCss from '../Hero/Hero.module.css'
import sprite from '../../images/symbol-defs.svg';
import userImage1 from '../../images/user1.jpg';
import userImage2 from '../../images/user2.jpg';
import userImage3 from '../../images/user3.jpg';
import userImage4 from '../../images/user4.jpg';
import userImage5 from '../../images/user5.jpg';
import { useEffect, useState } from 'react';

export default function ReviewsSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentDirection, setCurrentDirection] = useState('next');
    const [galleryTransform, setGalleryTransform] = useState(0);
    
    const reviews = [
        {
            id: 1,
            img: userImage1,
            name: 'Anna Black',
            profession: 'Student, Digital Marketing',
            rating: 5,
            text: "I always find the perfect pieces for my projects at this furniture store. Great selection and quality!"
        },
        {
            id: 2,
            img: userImage2,
            name: 'Jacob Miller',
            profession: 'Interior Designer',
            rating: 4,
            text: "Your furniture is a designer's dream. It elevates every space I work on."
        },
        {
            id: 3,
            img: userImage3,
            name: 'Tom Smith',
            profession: 'Architect',
            rating: 5,
            text: "As an architect, I appreciate well-crafted furniture. This store never disappoints with its craftsmanship."
        },
        {
            id: 4,
            img: userImage5,
            name: 'Kendall Evans',
            profession: 'Real Estate Agent',
            rating: 4,
            text: "I recommend this furniture store to all my clients. It helps homes sell faster and at higher prices."
        },
        {
            id: 5,
            img: userImage4,
            name: 'Chris Taylor',
            profession: 'Office Manager',
            rating: 5,
            text: "Comfortable and stylish office furniture has boosted our team's productivity. Highly recommended!"
        },
       
    ];

    const renderImages = (item) => {
        const images = [];
        for (let i = 0; i < item.rating; i++) {
            images.push(
                <svg key={i} width={18} height={18}>
                    <use href={sprite + '#icon-star'}></use>
                </svg>
            );
        }
        return images;
    };

    useEffect(() => {
        if (currentSlide === reviews.length - 1) setCurrentDirection('prev');
        if (currentSlide === 0) setCurrentDirection('next');

        const interval = setInterval(() => {
            if (currentDirection === 'next') {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
                setGalleryTransform((prevTransform) => prevTransform - 100);
            }
            if (currentDirection === 'prev') {
                setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviews.length - 1 : prevSlide - 1));
                setGalleryTransform((prevTransform) => prevTransform + 100);
            }
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide, currentDirection, reviews.length]);

    

    return (
        <div className={css.sliderContainer}>
            <div className={heroCss.heroGalleryContainer}>
                <ul className={css.reviews} style={{ transform: `translateX(${galleryTransform}%)` }}>
                    {reviews.map((item) => (
                        <li className={css.review} key={item.id}>
                            <img className={css.reviewImage} src={item.img} alt={item.name}></img>
                            <h3 className={css.reviewNameText}>{item.name}</h3>
                            <p className={css.reviewProfessionText}>{item.profession}</p>
                            <div style={{ display: 'flex' }}> {renderImages(item)} </div>
                            <p className={css.reviewText}>{item.text}</p>
                        </li>
                    ))}
                </ul>
                {/* <div className={heroCss.heroButtonsContainer}>
                    <button className={heroCss.heroPrevButton} onClick={prevSlide} disabled={isPrevButtonDisabled}>
                        <svg className={heroCss.heroPrevIcon} width={34} height={32}>
                            <use href={sprite + '#icon-arrow'}></use>
                        </svg>
                    </button>
                    <button className={heroCss.heroNextButton} onClick={nextSlide} disabled={isNextButtonDisabled}>
                        <svg className={heroCss.heroNextIcon} width={34} height={32}>
                            <use href={sprite + '#icon-arrow'}></use>
                        </svg>
                    </button>
                </div> */}
            </div>
        </div>
        
    );
};
