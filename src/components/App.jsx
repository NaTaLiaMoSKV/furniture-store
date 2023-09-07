import { useState } from "react";
import Header from "./Header/Header";
import MobileMenu from "./MobileMenu/MobileMenu";
import Hero from "./Hero/Hero";
import Benefits from "./Benefits/Benefits";
import Category from "./Category/Category";
import BestSeller from "./BestSeller/BestSeller";


export const App = () => {
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
    // const body = document.querySelector('body');

    const onOpenMobileMenuClick = () => {
        setIsMobileMenuOpened(true);
        // body.classList.add('hidden');
    };

    const onCloseMobileMenuClick = () => {
        setIsMobileMenuOpened(false);
        // body.classList.remove('hidden');
    };

    return (
        <>
            <Header onOpen={onOpenMobileMenuClick} />
            <MobileMenu isMobileMenuOpened={isMobileMenuOpened} onClose={onCloseMobileMenuClick} />
            <Hero />
            <Benefits />
            <Category />
            <BestSeller />
        </>
    );
};
