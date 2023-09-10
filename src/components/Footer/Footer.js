import css from './Footer.module.css'
import headerCss from '../Header/Header.module.css'
import logoImage from '../../images/logo.png'
import logoDot from '../../images/dot.png'
import sprite from '../../images/symbol-defs.svg'

export default function Footer() {
    const footerLinks = [
        {
            id: 1,
            title: 'Company',
            items: ['About Us', 'Blog', 'Careers', 'Our Team', 'Help Center']
        },
        {
            id: 2,
            title: 'Shop',
            items: ['Gift Cards', 'Out Products', 'My Accounts', 'Shipping', 'Returns']
        },
        {
            id: 3,
            title: 'Support',
            items: ['Contact Us', 'Payment Options', 'Store Locator', 'Accessibility', 'Affiliates']
        },
        {
            id: 4,
            title: 'FAQ',
            items: ['Rewards FAQ', 'Product Care', 'Size Guide']
        }
    ];

    const renderLinks = (link) => {
        const links = [];
        for (let i = 0; i < link.items.length; i++) {
            links.push(
                <li className={css.linkItem} key={i}>
                    <a className={css.link} href='/furniture-store'>{link.items[i]}</a>
                </li>
            );
        }
        return links;
    };

    return (
        <footer>
            <section>
                <div className={css.footerContainer}>
                    <div className={css.footerDescriptionContainer}>
                        <a href="/furniture-store" className={headerCss.logoContainer}>
                            <img className={headerCss.logoImage} src={logoImage} alt='logo'></img>
                            <p className={headerCss.logoText}>urniture</p>
                            <img className={headerCss.logoDotImage} src={logoDot} alt='logo'></img>
                        </a>
                        <p className={css.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul className={css.iconsList}>
                            <a className={css.iconLink} href='/furniture-store'>
                                <li className={css.icon}>
                                    <svg className={css.iconSvg}>
                                        <use href={sprite + '#icon-facebook'}></use>
                                    </svg>
                                </li>
                            </a>
                            <a className={css.iconLink} href='/furniture-store'>
                                <li className={css.icon}>
                                    <svg className={css.iconSvg}>
                                        <use href={sprite + '#icon-youtube'}></use>
                                    </svg>
                                </li>
                            </a>
                            <a className={css.iconLink} href='/furniture-store'>
                                <li className={css.icon}>
                                    <svg className={css.iconSvg}>
                                        <use href={sprite + '#icon-twitter'}></use>
                                    </svg>
                                </li>
                            </a>
                            <a className={css.iconLink} href='/furniture-store'>
                                <li className={css.icon}>
                                    <svg className={css.iconSvg}>
                                        <use href={sprite + '#icon-instagram'}></use>
                                    </svg>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className={css.linkContainer}>
                        {footerLinks.map(item => (
                            <div className={css.linkWrapper} key={item.id}>
                                <p className={css.linkListTitle}>{item.title}</p>
                                <ul className={css.linkList}>
                                    {renderLinks(item)}
                                </ul>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className={css.copyrightContainer}>
                    <p className={css.copyrightText}>Copyright © 2023 Furnituredot. All Rights Reserved.</p>
                    <p className={css.copyrightText}>User Terms & Conditions | Privacy Policy</p>
                </div>
            </section>
        </footer>
    )
}