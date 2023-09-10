import css from './Newsletter.module.css'
import envelopeImage from '../../images/envelope.png'

export default function Newsletter() {
    return (
        <div className={css.newsletter}>
            <section>
                <div className={css.newsletterContainer}>
                    <p className='section-subtitle'>Our Newsletter</p>
                    <h2 className={css.titleText} >Subscribe to Our Newsletter to Get Updates to Our Latest Furniture</h2>
                    <p className={css.subtitleText} >Get 20% off on your first order just by subscribing to out newsletter</p>
                    <form className={css.form}>
                        <input className={css.formInput} type='email' placeholder='Enter email' />
                        <img className={css.formImage} src={envelopeImage} alt='envelope'></img>
                        <button className={css.formButton} type='submit'>Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    )
}