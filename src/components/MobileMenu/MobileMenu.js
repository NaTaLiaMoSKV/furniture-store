import css from './MobileMenu.module.css'
// import css from './Header.module.css'
import logoDot from '../../images/dot.png'
import headerCss from '../Header/Header.module.css'
import logoImage from '../../images/logo.png'
import sprite from '../../images/symbol-defs.svg'

export default function MobileMenu({ isMobileMenuOpened, onClose }) {
    return (
        <div className={`${css.mobileMenuContainer} ${isMobileMenuOpened && css.show}`}>
            <section>
                <div className={headerCss.headerContainer}>
                
                    <a href='/furniture-store' className={headerCss.logoContainer} onClick={onClose}>
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
                    <li className={css.navItem}><a className={css.navLink} onClick={onClose} href='#home'>Home</a></li>
                    <li className={css.navItem}><a className={css.navLink} onClick={onClose} href='#about'>About</a></li>
                    <li className={css.navItem}><a className={css.navLink} onClick={onClose} href='#shop'>Shop</a></li>
                    <li className={css.navItem}><a className={css.navLink} onClick={onClose} href='#testimonial'>Testimonial</a></li>
                    <li className={css.navItem}><a className={css.navLink} onClick={onClose} href='#blog'>Blog</a></li>
                    <li className={css.navItem}><a className={css.navLink} onClick={onClose} href='#contact'>Contact Us</a></li>
                </ul>
            </section>
        </div>

    )
}