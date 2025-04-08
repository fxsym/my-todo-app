import React, { useRef, useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

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
    <nav className="bg-sky-500 w-full relative lg:flex lg:items-center lg:justify-between">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="rounded-full w-15 overflow-hidden aspect-square">
            <img src="https://picsum.photos/id/5/200/300" className="w-full cursor-pointer" alt="" />
          </div>
          <h1 className="mx-4 font-semibold text-xl text-white">
            Hi, {user?.name}
          </h1>
        </div>
        <button className="ml-auto cursor-pointer lg:hidden" ref={hamburgerRef}>
          <div className="hamburger-line transition-all duration-500" />
          <div className="hamburger-line transition-all duration-500" />
          <div className="hamburger-line transition-all duration-500" />
        </button>
      </div>
      <div
        className="bg-sky-500 w-full max-h-0 overflow-hidden transition-all duration-500 ease-in-out lg:max-h-10 lg:ml-auto"
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
