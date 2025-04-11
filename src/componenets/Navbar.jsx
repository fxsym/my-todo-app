import React, { useRef, useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Logo from '../assets/images/Logo.jpg'

export const Navbar = () => {
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);
  const { logout, user } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const navMenu = navMenuRef.current;

    const handleClick = () => {
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('max-h-100');
    };

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', handleClick);
    }

    return () => {
      if (hamburger) {
        hamburger.removeEventListener('click', handleClick);
      }
    };
  }, []);

  const handleClickLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      navigate('/login');
    } catch (err) {
      setErrorMsg(err.message || 'Terjadi kesalahan');
    }
  };

  return (
    <nav className="w-full relative lg:flex lg:items-center lg:justify-between bg-sky-400">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full w-15 overflow-hidden border-1">
            <img src={Logo} className="w-full cursor-pointer" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-3xl text-black">
              Hi, {user?.name}
            </h1>
            <p className='text-xs text-sky-800'>Access your todos from anywhere everywhere</p>
          </div>
        </div>
        <button className="ml-auto cursor-pointer lg:hidden" ref={hamburgerRef}>
          <div className="hamburger-line transition-all duration-500" />
          <div className="hamburger-line transition-all duration-500" />
          <div className="hamburger-line transition-all duration-500" />
        </button>
      </div>
      <div
        className=" w-full max-h-0 overflow-hidden transition-all duration-500 ease-in-out lg:max-h-10 lg:ml-auto"
        ref={navMenuRef}
      >
        <ul className="lg:flex lg:justify-around">
          <li className="nav-list">
            <a className="text-nav-list" href="">Account</a>
          </li>
          <li className="nav-list">
            <a className="text-nav-list" href="">About</a>
          </li>
          <li className="nav-list">
            <a className="text-nav-list" href="">Contacts</a>
          </li>
          <li className="nav-list">
            <button onClick={handleClickLogout}>
              <p className="text-nav-list">Logout</p>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
