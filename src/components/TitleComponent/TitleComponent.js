import css from './TitleComponent.module.css'

export default function TitleComponent({ titleText }) {
    return (
        <div className={css.titleContainer}>
            <h2 className={css.titleText}>{titleText}</h2>
            <p className={css.subtitleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    )
}