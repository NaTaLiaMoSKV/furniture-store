import css from './MobileMenu.module.css'
import logoDot from '../../images/dot.png'
import headerCss from '../Header/Header.module.css'
import logoImage from '../../images/logo.png'
import sprite from '../../images/symbol-defs.svg'

export default function MobileMenu({ isMobileMenuOpened, onClose }) {

    const scrollTo = (e, id)=> {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        onClose();
    };

    return (
        <div className={`${css.mobileMenuContainer} ${isMobileMenuOpened ? css.show : css.hidden}`}>
            {isMobileMenuOpened && (
                <section>
                    <div className={headerCss.headerContainer}>
                        <a href='/furniture-store' className={headerCss.logoContainer} onClick={e => onClose(e)}>
                            <img className={headerCss.logoImage} src={logoImage} alt='logo'></img>
                            <p className={css.logoText}>urniture</p>
                            <img className={headerCss.logoDotImage} src={logoDot} alt='logo'></img>
                        </a>
                        <button className={css.mobileMenuButtonClose} type="button" onClick={onClose} >
                            <svg width="32" height="32" className={css.mobileMenuIconClose} >
                                <use href={sprite + '#icon-close'}></use>
                            </svg>
                        </button>
                    </div>
                    <ul className={css.navList}>
                        <li className={css.navItem} onClick={e => scrollTo(e, 'home')}>Home</li>
                        <li className={css.navItem} onClick={e => scrollTo(e, 'about')}>About</li>
                        <li className={css.navItem} onClick={e => scrollTo(e, 'shop')}>Shop</li>
                        <li className={css.navItem} onClick={e => scrollTo(e, 'testimonial')}>Testimonial</li>
                        <li className={css.navItem} onClick={e => scrollTo(e, 'blog')}>Blog</li>
                        <li className={css.navItem} onClick={e => scrollTo(e, 'contacts')}>Contact Us</li>
                    </ul>
                </section>
            )}
        </div>

    )
}