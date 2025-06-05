import React, { useContext } from 'react';
import registerLottie from '../../assets/Animation - 1748278592850.json';
import Lottie from 'lottie-react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init'; // ✅ auth import করা লাগবে

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;

       
        return updateProfile(user, {
          displayName: name,
          photoURL: photoURL
        }).then(() => {
        
          return auth.currentUser.reload();
        }).then(() => {
          const updatedUser = auth.currentUser;
          console.log(" Updated user info:", {
            displayName: updatedUser.displayName,
            email: updatedUser.email,
            photoURL: updatedUser.photoURL
          });

        });
      })
      .catch((error) => {
        console.error(" Registration error:", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie style={{ width: '300px' }} animationData={registerLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" required />
                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" required />
                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" required />
                <label className="label">Photo URL</label>
                <input name='photoURL' type="url" className="input" placeholder="Photo URL" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
