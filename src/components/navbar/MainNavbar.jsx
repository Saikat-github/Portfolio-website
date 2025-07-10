
import React, { useState, useCallback } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo.png';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { Link } from 'react-router-dom';


const MENU_ITEMS = [
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#mywork" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const MainNavbar = () => {
  const [menu, setMenu] = useState("Home");
  const [showSidebar, setShowSidebar] = useState(false);

  const onClickHandler = useCallback((navItem) => {
    setMenu(navItem);
    setShowSidebar(false);
  }, []);

  return (
    <div className='flex justify-between h-24 lg:px-12 px-4 py-5 text-sm lg:items-center  sticky top-0 z-20 bg-slate-950'>
      <Link to={"/"}><img src={logo} alt="Logo" className='nav-logo w-16 h-14 rounded-md object-cover' /></Link>
      <Link to={"/"} className='text-orange-600 px-4 py-2 rounded'>
      Back Home
      </Link>

    </div>
  );
};

export default MainNavbar;
