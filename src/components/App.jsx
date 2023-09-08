import { useState } from "react";
import Header from "./Header/Header";
import MobileMenu from "./MobileMenu/MobileMenu";
import Hero from "./Hero/Hero";
import Benefits from "./Benefits/Benefits";
import Category from "./Category/Category";
import BestSeller from "./BestSeller/BestSeller";


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
        </>
    );
};
