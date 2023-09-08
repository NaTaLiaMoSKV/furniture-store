import logoImage from '../../images/logo.png'
import logoDot from '../../images/dot.png'
import sprite from '../../images/symbol-defs.svg'
import css from './Header.module.css'

export default function Header({ onOpen }) {

    const scrollTo = (id )=> {
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
                        <li className={css.navItem} onClick={e => scrollTo('home')}>Home</li>
                        <li className={css.navItem} onClick={e => scrollTo('about')}>About</li>
                        <li className={css.navItem} onClick={e => scrollTo('shop')}>Shop</li>
                        <li className={css.navItem} onClick={e => scrollTo('testimonial')}>Testimonial</li>
                        <li className={css.navItem} onClick={e => scrollTo('blog')}>Blog</li>
                        <li className={css.navItem} onClick={e => scrollTo('contacts')}>Contact Us</li>
                    </ul>
                    <div className={css.supportContainer}>
                        <p className={css.supportText}>Support</p>
                        <a className={css.supportLink} href='tel:4065550120'>(406) 555-0120</a>
                    </div>
                    <button className={css.mobileMenuButton} type="button" onClick={e => onOpen(e)}>
                        <svg  width="32" height="32" className={css.mobileMenuIcon}>
                            <use href={sprite + '#icon-burger'}></use>
                        </svg>
                    </button>
                </div>
            </section>
        </header>
    )
}
