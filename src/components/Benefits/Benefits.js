import css from './Benefits.module.css'
import cube from '../../images/cube.png'
import payment from '../../images/payment.png'
import delivery from '../../images/delivery.png'
import promo from '../../images/promo.png'

export default function Benefits() {
    return (
        <section id='about'>
            <div className={css.exploreContainer}>
                <div className={css.exploreWrapper}>
                    <p className={css.exploreText}>Explore Now</p>
                </div>
            </div>
            <div className={css.benefitsContainer}>
                <p className='section-subtitle'>Benefits</p>
                <div className={css.titleContainer}>
                    <h2 className={css.titleText}>What Makes Us the Preferred Choice?</h2>
                    <p className={css.subtitleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <ul className={css.benefitsList}>
                    <li className={css.benefitsItem}>
                        <div className={css.benefitsImageWrapper}>
                            <img className={css.benefitsImage} src={payment} alt='payment'></img>
                        </div>
                        <h3 className={css.benefitsItemTitle}>Easy Payment</h3>
                        <p className={css.benefitsItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </li>
                    <li className={css.benefitsItem}>
                        <div className={css.benefitsImageWrapper}>
                            <img className={css.benefitsImage} src={promo} alt='promo'></img>
                        </div>
                        <h3 className={css.benefitsItemTitle}>Promo Offers</h3>
                        <p className={css.benefitsItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </li>
                    <li className={css.benefitsItem}>
                        <div className={css.benefitsImageWrapper}>
                            <img className={css.benefitsImage} src={delivery} alt='delivery'></img>
                        </div>
                        <h3 className={css.benefitsItemTitle}>Free Delivery</h3>
                        <p className={css.benefitsItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </li>
                    <li className={css.benefitsItem}>
                        <div className={css.benefitsImageWrapper}>
                            <img className={css.benefitsImage} src={cube} alt='return'></img>
                        </div>
                        <h3 className={css.benefitsItemTitle}>Easy Return</h3>
                        <p className={css.benefitsItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </li>
                </ul>
            </div>
        </section>
            
    )
}