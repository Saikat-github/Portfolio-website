import React, { useState, useCallback } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo.png';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { Link } from 'react-router-dom';


const MENU_ITEMS = [
  { label: "To The Top", href: "#tothetop" },
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#mywork" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const HeaderNavbar = () => {
  const [menu, setMenu] = useState("tothetop");
  const [showSidebar, setShowSidebar] = useState(false);

  const onClickHandler = useCallback((navItem) => {
    setMenu(navItem);
    setShowSidebar(false);
  }, []);

  return (
    <div className='flex justify-between h-24 lg:px-12 px-4 py-5 text-xl lg:items-center  sticky top-0 z-20 bg-slate-950'>
      <Link to={"/"}><img src={logo} alt="Logo" className='nav-logo w-16 h-14 rounded-md object-cover' /></Link>

      {/* Menu open icon */}
      {!showSidebar && (
        <img src={menu_open} onClick={() => setShowSidebar(true)} className="inline lg:hidden cursor-pointer w-6 -z-10" />
      )}

      {/* Navigation Menu */}
      <ul
        className={`nav-menu flex lg:flex-row flex-col gap-10 absolute right-0 top-0 text-sm
          ${showSidebar ? ' w-48 py-4 h-screen bg-[#1F0016] px-12 space-y-6' : 'hidden lg:flex'} lg:static lg:w-auto lg:py-0 lg:h-auto lg:bg-transparent lg:px-0 lg:space-y-0`}
      >
        {/* Menu close icon */}
        {showSidebar && (
          <img src={menu_close} onClick={() => setShowSidebar(false)} className="cursor-pointer w-6 ml-auto lg:hidden" />
        )}

        {/* Render menu items */}
        {MENU_ITEMS.map(({ label, href }) => (
          <li
            key={label}
            className={`cursor-pointer ${menu === label ? "border-b-2 border-b-orange-600 pb-2" : ""}`}
            onClick={() => onClickHandler(label)}
          >
            <AnchorLink offset={50} href={href}>
              <p>{label}</p>
            </AnchorLink>
          </li>
        ))}
      </ul>

      {/* Connect Button */}
      <div className="hidden lg:block nav-connect px-4 py-2 bg-orange-600 rounded-full cursor-pointer hover:scale-105 transition duration-300 text-sm">
        <AnchorLink offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default HeaderNavbar;
