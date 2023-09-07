import { useState } from "react";
import Header from "./Header/Header";
import MobileMenu from "./MobileMenu/MobileMenu";
import Hero from "./Hero/Hero";
import Benefits from "./Benefits/Benefits";
import Category from "./Category/Category";


export const App = () => {
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    const onOpenMobileMenuClick = () => {
        setIsMobileMenuOpened(true);
    };

    const onCloseMobileMenuClick = () => {
        setIsMobileMenuOpened(false);
    };

    return (
        <div>
          <Header onOpen={onOpenMobileMenuClick} />
          <MobileMenu isMobileMenuOpened={isMobileMenuOpened} onClose={onCloseMobileMenuClick} />
          <Hero />
            <Benefits />
            <Category />
        </div>
    );
};
