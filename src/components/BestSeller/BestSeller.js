
import { useState } from 'react';
import css from './BestSeller.module.css';
import sprite from '../../images/symbol-defs.svg';
import items from '../../api/items.json';
import TitleComponent from 'components/TitleComponent/TitleComponent';

export default function BestSeller() {
    const [collectionData, setCollectionData] = useState(items['chairs']);
    const [activeButton, setActiveButton] = useState('chairs');

    const onSellerButtonClick = (collectionName) => {
        setCollectionData(items[collectionName]);
        setActiveButton(collectionName);
    };

    const collections = [
        'Chairs',
        'Tables',
        'Sofas',
        'Beds',
        'Lamps',
        'Chimneys',
        'Storage',
        'Kitchen',
        'Gardening',
    ];

    return (
        <section className={css.shopContainer} id='shop'>
            <p className="section-subtitle">Best Seller</p>
            <TitleComponent titleText={'Our Best Seller Products'} />
            <div className={css.sellerButtonContainer}>
                {collections.map((collection) => (
                    <button key={collection} type="button" className={`${css.sellerButton} ${activeButton === collection.toLowerCase() ? css.active : ''}`} onClick={() => onSellerButtonClick(collection.toLowerCase())} >
                        {collection}
                    </button>
                ))}
            </div>
            <ul className={css.itemsList}>
                {collectionData && collectionData.map((item) => (
                    <li key={item.id} className={css.item}>
                        <div className={css.itemRatingWrapper}>
                            <svg className={css.itemRatingIcon} width={20} height={20}>
                                <use href={sprite + '#icon-star'}></use>
                            </svg>
                            <p className={css.itemRatingText}>{item.rating}</p>
                        </div>
                        <img className={css.itemImage} src={item.img} alt={item.name}></img>
                        <div className={css.itemDescriptionWrapper}>
                            <p className={css.itemName}>{item.name}</p>
                            <p className={css.itemPrice}>₴ {item.price}.00</p>
                        </div>
                        <p className={css.itemCategory}>Living Room</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
