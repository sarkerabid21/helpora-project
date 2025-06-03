import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import signInLottie from '../../assets/Animation - 1748917608263.json';

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // Redirect or toast here
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie style={{ width: '300px' }} animationData={signInLottie} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="space-y-2">
                <label className="label">Email</label>
                <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
                
                <label className="label">Password</label>
                <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" required />
                
                <div>
                  <a href="#" className="link link-hover text-sm">Forgot password?</a>
                </div>
                
                <button className="btn btn-neutral mt-4 w-full">Sign in</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
