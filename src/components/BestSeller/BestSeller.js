
import { useState } from 'react';
import css from './BestSeller.module.css';
import benefitsCss from '../Benefits/Benefits.module.css';
import sprite from '../../images/symbol-defs.svg';
import items from '../../api/items.json';

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
        <section id="shop">
            <div className={benefitsCss.benefitsContainer}>
                <p className="section-subtitle">Best Seller</p>
                <div className={benefitsCss.titleContainer}>
                    <h2 className={benefitsCss.titleText}>Our Best Seller Products</h2>
                    <p className={benefitsCss.subtitleText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
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
            </div>
        </section>
    );
}
