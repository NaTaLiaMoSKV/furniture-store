import css from './Offers.module.css'

export default function Offers() {
    return (
        <div className={css.offers}>
            <img className={css.offerImage} src='https://i.pinimg.com/564x/0d/ac/2d/0dac2d70143cc5120c87353e00a69d22.jpg' alt='living room'></img>
            <section className={css.offersContainer}>
                <div className={css.imagesContainer}>
                    <img className={css.image} src='https://i.pinimg.com/564x/0d/ac/2d/0dac2d70143cc5120c87353e00a69d22.jpg' alt='living room'></img>
                    <img className={css.image} src='https://i.pinimg.com/564x/a8/11/7a/a8117a696c40b2d3a4e0c07ecd3f4150.jpg' alt='bedroom'></img>
                    <img className={css.image} src='https://i.pinimg.com/564x/cc/04/f2/cc04f24642b23c353f5f7d786d886dea.jpg' alt='office'></img>
                    <img className={css.image} src='https://i.pinimg.com/564x/c5/b6/fa/c5b6fae2bb01ef443dd0c859174fa3a0.jpg' alt='kitchen'></img>
                </div>
                <div className={css.offer}>
                    <div className={css.offerWrapper}>
                        <p className='section-subtitle'>Offers</p>
                        <h2 className={css.offerTitle}>Get Upto 50% Offer On Festival Season!</h2>
                        <p className={css.offerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                        <button className={`${css.offerButton} buy-button`} type='button'>Redeem Now</button>
                    </div>
                </div>
            </section>
        </div>
        
    )
}