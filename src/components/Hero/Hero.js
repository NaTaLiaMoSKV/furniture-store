import css from './Hero.module.css'
import awardIcon from '../../images/chair-icon.png'
import sprite from '../../images/symbol-defs.svg'

export default function Hero() {
    const livingRoomImage = 'https://www.bhg.com/thmb/Ke48CUYRrXfAc_CJP4eXuZsrWkw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg';
    
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
                        <ul className={css.gallery}>
                            <li className={css.galleryItem}>
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
                            <li className={css.galleryItem}>
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
                        </ul>
                        <div className={css.heroButtonsContainer}>
                            <button className={css.heroPrevButton}>
                                <svg className={css.heroPrevIcon} width={34} height={32}>
                                    <use href={sprite + '#icon-arrow'}></use>
                                </svg>
                            </button>
                            <button className={css.heroNextButton}>
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