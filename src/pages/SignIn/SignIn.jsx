import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import signInLottie from '../../assets/Animation - 1749226843029.json';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
       
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col bg-teal-600 rounded-2xl lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie style={{ width: '300px' }} animationData={signInLottie} loop={true} />
        </div>
        <div className="card  w-full max-w-sm shrink-0 bg-teal-950">
          <div className="card-body">
            <h1 className="text-5xl text-white font-bold">Sign In</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="space-y-2">
                <label className="text-white label">Email</label>
                <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
                
                <label className="text-white label">Password</label>
                <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" required />
                
                <div>
                  <a  className="text-white link link-hover text-sm">Forgot password?</a>
                </div>
                
                <button className="btn btn-neutral mt-4 w-full">Sign in</button>
              </fieldset>
            </form>
            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
