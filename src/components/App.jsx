import { useState } from "react";
import Header from "./Header/Header";
import MobileMenu from "./MobileMenu/MobileMenu";
import Hero from "./Hero/Hero";
import Benefits from "./Benefits/Benefits";
import Category from "./Category/Category";
import BestSeller from "./BestSeller/BestSeller";
import Offers from "./Offers/Offers";
import TodayDeals from "./TodayDeals/TodayDeals";
import Updates from "./Updates/Updates";
import Blog from "./Blog/Blog";
import Questions from "./Questions/Questions";
import Newsletter from "./Newsletter/Newsletter";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import ScrollButton from "./ScrollButton/ScrollButton";


export const App = () => {
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    const onOpenMobileMenuClick = e => {
        e.preventDefault();
        setIsMobileMenuOpened(true);
    };

    const onCloseMobileMenuClick = ()=> {
        setIsMobileMenuOpened(false)
    };

    return (
        <>
            <Header onOpen={onOpenMobileMenuClick} />
            <MobileMenu isMobileMenuOpened={isMobileMenuOpened} onClose={onCloseMobileMenuClick} />
            <Hero />
            <Benefits />
            <Category />
            <BestSeller />
            <Offers />
            <TodayDeals />
            <Testimonials />
            <Updates />
            <Blog />
            <Questions />
            <Newsletter />
            <Footer />
            <ScrollButton />

            
        </>
    );
};
