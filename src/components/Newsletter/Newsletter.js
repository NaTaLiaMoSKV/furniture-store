import css from './Newsletter.module.css'
import envelopeImage from '../../images/envelope.png'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    const onSubmitButtonClick = e => {
        e.preventDefault(); 
        if (email.trim() === '') {
            toast('Please enter your email address', {
                style: {backgroundColor: '#ff4d4d', color: '#fafafa'}
            });
            return;
        }
        if (isValidEmail(email)) {
            setEmail('');
            toast('Succesfully subsribed!', {
                style: {backgroundColor: '#8bbb97', color: '#fafafa'}
            });
            return;
        } else {
            toast('Please enter a valid email address.', {
                style: {backgroundColor: '#ff4d4d', color: '#fafafa'}
            });
        }
    }

    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    return (
        <div className='gray-section' id='contacts'>
            <section>
                <div className={css.newsletterContainer}>
                    <p className='section-subtitle'>Our Newsletter</p>
                    <h2 className='center-title' >Subscribe to Our Newsletter to Get Updates About Our Furniture</h2>
                    <p className={css.subtitleText} >Get 20% off on your first order just by subscribing to out newsletter</p>
                    <form className={css.form}>
                        <input className={css.formInput} type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <img className={css.formImage} src={envelopeImage} alt='envelope'></img>
                        <button className='buy-button' onClick={(e) => onSubmitButtonClick(e)} type='submit'>Subscribe</button>
                    </form>
                </div>
            </section>
            <ToastContainer autoClose={1000} hideProgressBar />
        </div>
    )
}