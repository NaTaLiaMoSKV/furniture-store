
import { useState } from 'react';
import items from '../../api/todayDeals.json'
import sprite from '../../images/symbol-defs.svg'
import css from './TodayDeals.module.css'
import shopCss from '../BestSeller/BestSeller.module.css'

export default function TodayDeals() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [galleryTransform, setGalleryTransform] = useState(0);
    const screenWidth = window.innerWidth;
    const galleryItems = items;

    const nextSlide = () => {
        const next = (currentSlide + 1) % galleryItems.length;
        setCurrentSlide(next);
        if (screenWidth <= 767) setGalleryTransform((prevTransform) => prevTransform - 100);
        else if (screenWidth > 768 && screenWidth <= 1199) setGalleryTransform((prevTransform) => prevTransform - 50);
        else setGalleryTransform((prevTransform) => prevTransform - 34);
    };

    const prevSlide = () => {
        const prev = currentSlide === 0 ? galleryItems.length - 1 : currentSlide - 1;
        setCurrentSlide(prev);
        if (screenWidth <= 767) setGalleryTransform((prevTransform) => prevTransform + 100);
        else if (screenWidth > 768 && screenWidth <= 1199) setGalleryTransform((prevTransform) => prevTransform + 50);
        else setGalleryTransform((prevTransform) => prevTransform + 34);
    };
    
    const isPrevButtonDisabled = currentSlide === 0;
    const isNextButtonDisabled = (screenWidth > 1200  && currentSlide === galleryItems.length - 3) || ((screenWidth > 768 && screenWidth <= 1199)  && currentSlide === galleryItems.length - 2) || (screenWidth <= 767 && currentSlide === galleryItems.length - 1);

    return (
        <section className={css.todayDeals}>
            <p className='section-subtitle'>Today Deals</p>
            <div className={css.titleContainer}>
                <h2 className={css.titleText} style={{textAlign: 'center'}}>Unmissable Daily Deals Await: Shop Now and Save!</h2>
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
            <div className={css.todayDealsWrapper}>
                {/* <div className={css.heroButtonsContainer}>
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
                </div> */}
                <ul className={css.gallery} style={{ transform: `translateX(${galleryTransform}%)` }}>
                    {galleryItems && galleryItems.map((item) => (
                        <li key={item.id} className={css.galleryItem}>
                            <img className={shopCss.itemImage} src={item.img} alt={item.name}></img>
                            <div className={shopCss.itemDescriptionWrapper}>
                                <p className={shopCss.itemName}>{item.name}</p>
                                <p className={shopCss.itemPrice}>₴ {item.price}.00</p>
                            </div>
                            <div className={css.itemRatingWrapper}>
                                <svg className={shopCss.itemRatingIcon} width={20} height={20}>
                                    <use href={sprite + '#icon-star'}></use>
                                </svg>
                                <p className={shopCss.itemRatingText}>{item.rating}</p>
                                <p className={shopCss.itemRatingText} style={{marginLeft: "7px"}}>{(item.rating * 10 - 4).toFixed() } Rewiews</p>
                            </div>
                            
                            <p className={css.itemCategory}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button type='button' className={css.itemBuyButton}>Buy Now</button>
                        </li>
                    ))}
                </ul>
                <div className={css.heroMobileButtonsContainer}>
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
        </section>
    )
}