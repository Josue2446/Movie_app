import { useRef } from 'react';
import './signup.css';
import { auth } from '../../firebase';

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="signup">
      <form>
        <h2>Sign in</h2>
        <input ref={emailRef} placeholder="Email" type="email"></input>
        <input ref={passwordRef} placeholder="Password" type="password"></input>
        <br />
        <button onClick={signIn} className="signup-btn" type="submit">
          Sign in
        </button>
        <h5>
          <span className="signup-prompt">Need to sign up? </span>
          <span onClick={register} className="signup-prompt-link">
            {' '}
            Register now!
          </span>
        </h5>
      </form>
    </div>
  );
};

export default Signup;
