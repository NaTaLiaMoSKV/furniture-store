import css from './Testimonials.module.css'
import questionsCss from '../Questions/Questions.module.css'
import offerCss from '../Offers/Offers.module.css'
import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider'

export default function Testimonials() {
    return (
        <div className={css.testimonials}>
            <section>
                <div className={css.testimonialsContainer}>
                    <div className={questionsCss.titleContainer}>
                        <p className='section-subtitle'>Testimonials</p>
                        <h2 className={questionsCss.titleText}>Our Customer Testimonials</h2>
                        <p className={css.subtitleText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className={offerCss.offerButton} type='button'>Explore Products</button>
                    </div>
                    <ReviewsSlider />
                </div>
            </section>
        </div>
    )
}