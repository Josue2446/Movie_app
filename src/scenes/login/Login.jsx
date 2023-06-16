import React, { useState } from 'react';
import './login.css';
import NetflixLogo from '../../assets/images/netflix-login.png';
import LoginBackground from '../../assets/images/login-background.jpg';
import SignUp from '../signIn/Signup';

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="login"
      style={{
        background: `url(${LoginBackground}) center no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <div className="login-bg">
        <img
          className="login-screen-logo"
          src={NetflixLogo}
          alt="Netflix logo"
        />
        <button onClick={() => setSignIn(true)} className="login-btn">
          Sign in
        </button>

        <div className="login-gradient" />
      </div>

      <div className="login-body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login-input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="email-btn-submit"
                >
                  {' '}
                  Get Started {`>`}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
