import css from './Footer.module.css'

export default function Footer() {
    return (
        <footer>
            <section>
                <p className={css.copyrightText}>Copyright © 2023 Furnituredot</p>
            </section>
        </footer>
    )
}