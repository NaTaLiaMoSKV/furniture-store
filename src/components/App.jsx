import { useState } from "react";
import Header from "./Header/Header";
import MobileMenu from "./MobileMenu/MobileMenu";
// import { useRef } from "react";
// import mobileMenuCss from './MobileMenu/MobileMenu.module.css'
import Hero from "./Hero/Hero";


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

        </div>
    );
};
