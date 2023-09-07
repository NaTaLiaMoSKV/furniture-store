import logoImage from '../../images/logo.png'
import logoDot from '../../images/dot.png'
import css from './Header.module.css'
import sprite from '../../images/symbol-defs.svg'

export default function Header({ onOpen }) {

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <section>
                <div className={css.headerContainer}>
                    <a href="/furniture-store" className={css.logoContainer}>
                        <img className={css.logoImage} src={logoImage} alt='logo'></img>
                        <p className={css.logoText}>urniture</p>
                        <img className={css.logoDotImage} src={logoDot} alt='logo'></img>
                    </a>
                    <ul className={css.navList}>
                        <li className={css.navItem}><a className={css.navLink} onClick={scrollTo('home')} href='#home'>Home</a></li>
                        <li className={css.navItem}><a className={css.navLink} onClick={scrollTo('about')} href='#about'>About</a></li>
                        <li className={css.navItem}><a className={css.navLink} onClick={scrollTo('shop')} href='#shop'>Shop</a></li>
                        <li className={css.navItem}><a className={css.navLink} onClick={scrollTo('testimonial')} href='#testimonial'>Testimonial</a></li>
                        <li className={css.navItem}><a className={css.navLink} onClick={scrollTo('blog')} href='#blog'>Blog</a></li>
                        <li className={css.navItem}><a className={css.navLink} onClick={scrollTo('contact')} href='#contact'>Contact Us</a></li>
                    </ul>
                    <div className={css.supportContainer}>
                        <p className={css.supportText}>Support</p>
                        <a className={css.supportLink} href='tel:4065550120'>(406) 555-0120</a>
                    </div>
                    <button className={css.mobileMenuButton} type="button" onClick={onOpen}>
                        <svg  width="32" height="32" className={css.mobileMenuIcon}>
                            <use href={sprite + '#icon-burger'}></use>
                        </svg>
                    </button>
                </div>
            </section>
        </header>
    )
}