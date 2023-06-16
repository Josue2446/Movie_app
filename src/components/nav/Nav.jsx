import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';
import Netflix from '../../assets/images/Netflix.png';
import NetflixAvatar from '../../assets/images/Netflix-avatar.png';

const Nav = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', transitionNav);
    return () => window.removeEventListener('scroll', transitionNav);
  }, []);

  const transitionNav = () => {
    window.scrollY > 99 ? setShow(true) : setShow(false);
  };

  return (
    <div className={`nav ${show && `nav-black`}`}>
      <div className="nav-contents">
        <img
          onClick={() => navigate('/')}
          className="nav-logo"
          src={Netflix}
          alt="Netflix logo"
        />
        <img
          onClick={() => navigate('/profile')}
          className="nav-avatar"
          src={NetflixAvatar}
          alt="Avatar logo"
        />
      </div>
    </div>
  );
};

export default Nav;
