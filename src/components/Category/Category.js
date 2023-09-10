import css from './Category.module.css'
import sprite from '../../images/symbol-defs.svg'

export default function Category() {
    return (
        <div className='gray-section'>
            <section>
                <div className={css.categoryContainer}>
                    <p className='section-subtitle'>Category</p>
                    <h2 className='center-title'>Discover Our Unique Collection of Exclusive Categories</h2>
                    <div className={css.categories}>
                        <div className={css.smallCategories}>
                            <div className={css.office}>
                                <div className={css.galleryDescriptionContainer}>
                                    <p className={css.galleryName}>Office</p>
                                    <p className={css.galleryCount}>250+ items</p>
                                    <button type='button' className={css.galleryButton}>
                                        <svg className={css.galleryIcon} width={25} height={25}>
                                            <use href={sprite + '#icon-arrow'}></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={css.bedroom}>
                                <div className={css.galleryDescriptionContainer}>
                                    <p className={css.galleryName}>Bedroom</p>
                                    <p className={css.galleryCount}>150+ items</p>
                                    <button type='button' className={css.galleryButton}>
                                        <svg className={css.galleryIcon} width={25} height={25}>
                                            <use href={sprite + '#icon-arrow'}></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={css.livingRoom}>
                                <div className={css.galleryDescriptionContainer}>
                                    <p className={css.galleryName}>Living Room</p>
                                    <p className={css.galleryCount}>350+ items</p>
                                    <button type='button' className={css.galleryButton}>
                                        <svg className={css.galleryIcon} width={25} height={25}>
                                            <use href={sprite + '#icon-arrow'}></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={css.kitchen}>
                            <div className={css.galleryDescriptionContainer}>
                                    <p className={css.galleryName}>Kitchen</p>
                                    <p className={css.galleryCount}>250+ items</p>
                                    <button type='button' className={css.galleryButton}>
                                        <svg className={css.galleryIcon} width={25} height={25}>
                                            <use href={sprite + '#icon-arrow'}></use>
                                        </svg>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}