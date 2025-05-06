import React, { useRef, useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import LeftArrow from '../assets/icon/left-arrow.png'
import SkyListLogo from '../assets/images/SkyListLogo400.png'
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);
  const navbarRef = useRef(null); // 👉 Tambahkan ini
  const { logout, user } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current?.offsetHeight || 60; // default fallback
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > navbarHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav
      ref={navbarRef} // 👉 tambahkan ini
      className={`w-full ${isScrolled ? 'fixed top-0 left-0 z-50 shadow-md' : 'relative'} 
      px-6 py-2 lg:flex lg:items-center lg:justify-between border-b-1 border-gray-400 
      transition-all bg-white duration-300 lg:px-14`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center ">
          <div className="w-15 sm:w-20" onClick={() => navigate('/')}>
            <img src={SkyListLogo} className="w-full cursor-pointer" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-2xl text-sky-400 sm:text-4xl">
              {/* Hi, {user?.name} */}
              SkyList
            </h1>
            {/* <p className='text-xs text-sky-800'>Access your todos from anywhere everywhere</p> */}
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
            <a className="text-nav-list" href="/dashboard">Dashboard</a>
          </li>
          <li className="nav-list">
            <a className="text-nav-list" href="/todos">All to-dos</a>
          </li>
          <li className="nav-list">
            <a className="text-nav-list" href="/account">Account</a>
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
