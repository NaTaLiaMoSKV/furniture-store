import React, { useState, useEffect } from 'react';
import './ScrollButton.css'; 
import sprite from '../../images/symbol-defs.svg'

function ScrollButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 1.1) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setIsVisible(false);
    };

    return (
        <button className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <svg className='scroll-icon'>
                <use href={sprite + '#icon-arrow-up'}></use>
            </svg>
        </button>
    );
}

export default ScrollButton;