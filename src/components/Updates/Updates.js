import css from './Updates.module.css'
import categoryCss from '../Category/Category.module.css'

export default function Updates() {
    
    return (
        <div className={css.updatesContainer}>
            <p className='section-subtitle'>Follow Us</p>
            <h2 className={categoryCss.titleText} style={{ maxWidth: "400px" }}>Follow for Updates & Exclusive Offers!</h2>
            <div className={css.updatesImages}>
                <img className={css.updatesImage} src='https://i.pinimg.com/564x/98/33/d1/9833d139f2c1c798c6f34b98fd9a1bc4.jpg' alt='living room'></img>
                <img className={css.updatesImage} src='https://i.pinimg.com/564x/87/86/b6/8786b638e74f6ba000232e2c135c78a1.jpg' alt='living room'></img>
                <img className={css.updatesImage} src='https://i.pinimg.com/564x/00/37/57/003757250e53be5ae9ab32a8bbcc79cb.jpg' alt='kitchen'></img>
                <img className={css.updatesImage} src='https://i.pinimg.com/564x/9d/eb/92/9deb92df2ddceaa063f9a98627d85445.jpg' alt='kitchen'></img>
                <img className={css.updatesImage} datatype='hide' src='https://i.pinimg.com/564x/83/19/3f/83193f806181ddb79c8d5190c984d87b.jpg' alt='bedroom'></img>
                <img className={css.updatesImage} datatype='hide' src='https://i.pinimg.com/564x/bd/87/18/bd871809abd7e2d85ccbcf3bf35f9ee1.jpg' alt='dressing room'></img>
                <img className={css.updatesImage} datatype='hide' src='https://i.pinimg.com/564x/45/00/dc/4500dc07d5e54c2d83325fd34d5e0101.jpg' alt='hall with mirror'></img>
                <img className={css.updatesImage} datatype='hide' src='https://i.pinimg.com/564x/c3/54/81/c35481db63edee133596caa180e9ae53.jpg' alt='living room'></img>
            </div>
        </div>
    )
}