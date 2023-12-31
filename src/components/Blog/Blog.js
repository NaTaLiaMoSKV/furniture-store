import css from './Blog.module.css'
import userImage from '../../images/user.png'
import calendarImage from '../../images/calendar.png'
import TitleComponent from 'components/TitleComponent/TitleComponent';

export default function Blog() {
    const blogs = [
        {
            id: 1,
            title: 'Perfecting Your Living Room with Coffee Tables',
            img: 'https://i.pinimg.com/564x/52/02/d9/5202d908bf38e9e15931ddb71850e0a7.jpg',
            category: 'Living Room'
        },
        {
            id: 2,
            title: 'Sneaky Ways To Get More Bedroom Storage',
            img: 'https://i.pinimg.com/564x/26/1d/b8/261db8248bfbf9e5ca2db7add65961db.jpg',
            category: 'Bedroom'
        },
        {
            id: 3,
            title: 'Interior Design in Ethno Style: Accents and Colors',
            img: 'https://cgifurniture.com/wp-content/uploads/2021/01/ethnic-interior-design-6-styles-View03.jpg',
            category: 'Living Room'
        }

    ];

    return (
        <div className='gray-section' id='blog'>
            <section>
                <p className="section-subtitle">Blogs & News</p>
                <TitleComponent titleText={'Our Latest Blogs & News'} />
                <ul className={css.blogList}>
                    {blogs.map(item => (
                        <li className={css.blog} key={item.id}>
                            <img className={css.blogImage} src={item.img} alt={item.category}></img>
                            <div className={css.blogDescriptionContainer}>
                                <p className={css.blogCategoryText}>{item.category}</p>
                                <h3 className={css.blogTitle}>{item.title}</h3>
                                <div className={css.blogInfoContainer}>
                                    <div className={css.blogInfoWrapper}>
                                        <img className={css.blogInfoImage} src={userImage} alt='autor'></img>
                                        <p className={css.blogInfoText}>by Admin</p>
                                    </div>
                                    <div className={css.blogInfoWrapper}>
                                        <img className={css.blogInfoImage} src={calendarImage} alt='calendar'></img>
                                        <p className={css.blogInfoText}>23 June, 2023</p>
                                    </div>
                                </div>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}