import css from './Hero.module.css'
import awardIcon from '../../images/chair-icon.png'
import sprite from '../../images/symbol-defs.svg'
import { useState } from 'react';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [galleryTransform, setGalleryTransform] = useState(0);

    const images = [
        'https://i.pinimg.com/564x/40/10/20/4010202a5cbc75d49bc3edbfef99e909.jpg',
        'https://i.pinimg.com/564x/1a/77/cd/1a77cdbe015408c3c828a731bd51f52f.jpg',
        'https://i.pinimg.com/564x/3d/0e/15/3d0e150a88c1b0417ae4936cd6c6db5b.jpg',
        'https://i.pinimg.com/564x/ed/5f/66/ed5f66356a6cd5ad16b3de0ad045a8d9.jpg'
    ];

    const galleryItems = [
        {
            name: 'Living Room',
            count: 150,
        },
        {
            name: 'Office',
            count: 250,
        },
        {
            name: 'Bedroom',
            count: 350,
        },
        {
            name: 'Kitchen',
            count: 250,
        },
    ];    

    const nextSlide = () => {
        const next = (currentSlide + 1) % images.length;
        setCurrentSlide(next);
        setGalleryTransform((prevTransform) => prevTransform - 100);
    };

    const prevSlide = () => {
        const prev = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(prev);
        setGalleryTransform((prevTransform) => prevTransform + 100);
    };
    
    const isPrevButtonDisabled = currentSlide === 0;
    const isNextButtonDisabled = currentSlide === images.length - 1;
    
    return (
        <div className={css.hero} id='home'>
             <section>
                <div className={css.heroContainer}>
                    <div className={css.heroDescriptionContainer}>
                        <div className={css.awardContainer}>
                            <div className={css.awardImageWrapper}> 
                                <img className={css.awardImage} src={awardIcon} alt='award'></img>
                            </div>
                            <p className={css.awardText}>Award Wining Furniture Store</p>
                        </div>
                    
                        <h1 className={css.heroTitle}>Make Your Interior Minimalist <span className={css.heroTitleSpan}>&</span> Modern</h1>

                        <p className={css.heroSubtitle}>Delivering Comfort as a Priority: Quick and Easy Access to a Wide Variety of Furniture</p>

                        <a className={css.heroShopLink} href='#shop'>Get Started</a>

                        <ul className={css.statList}>
                            <li className={css.statItem}>
                                <p className={css.statCount}>450+</p>
                                <p className={css.statText}>Collections</p>
                            </li>
                            <li className={css.statItem}>
                                <p className={css.statCount}>15K+</p>
                                <p className={css.statText}>Customers</p>
                            </li>
                            <li className={css.statItem}>
                                <p className={css.statCount}>4.9+</p>
                                <p className={css.statText}>Review Rating</p>
                            </li>
                        </ul>
                    </div>
                    <div className={css.heroGalleryContainer}>
                        <ul className={css.gallery} style={{ transform: `translateX(${galleryTransform}%)` }}>
                            {images.map((image, index) => (
                                <li key={index} className={css.galleryItem}>
                                    <img className={css.galleryImage} src={image} alt={`Slide ${index}`} />
                                    <div className={css.galleryDescriptionContainer}>
                                        <div className={css.galleryDescriptionContainer}>
                                            <p className={css.galleryName}>{galleryItems[index].name}</p>
                                            <p className={css.galleryCount}>{galleryItems[index].count}+ items</p>
                                            <button type='button' className={css.galleryButton}>
                                                <svg className={css.galleryIcon} width={25} height={25}>
                                                    <use href={sprite + '#icon-arrow'}></use>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={css.heroButtonsContainer}>
                            <button className={css.heroPrevButton} onClick={prevSlide} disabled={isPrevButtonDisabled}>
                                <svg className={css.heroPrevIcon} width={34} height={32}>
                                    <use href={sprite + '#icon-arrow'}></use>
                                </svg>
                            </button>
                            <button className={css.heroNextButton} onClick={nextSlide} disabled={isNextButtonDisabled}>
                                <svg className={css.heroNextIcon} width={34} height={32}>
                                    <use href={sprite + '#icon-arrow'}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
       
    )
}