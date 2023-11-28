import React, { useState } from 'react';
import './style.css';
import SideImg from './assets/warrior1.mp4';
import { useForm } from 'react-hook-form';

const Auth = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSignUp, setIsSignUp] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="Auth">
      <video autoPlay loop muted>
        <source src={SideImg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <h4>{isSignUp ? 'Sign Up' : 'Sign In'}</h4>
        <p>{isSignUp ? 'Unlock the coding journey!' : 'Welcome back!'}</p>

        <div className="formgroup">
          {isSignUp && (
            <>
              <input
                {...register('name', {
                  required: 'Name Field Required',
                  maxLength: { value: 15, message: 'Maximum 15 Characters' },
                })}
                type='text'
                placeholder="Name"
              />
              <span className="error">{errors?.name && errors.name.message}</span>
            </>
          )}

          <input
            {...register('email', { required: 'Email Field Required' })}
            type='email'
            placeholder="Email"
          />
          <span className="error">{errors?.email && errors.email.message}</span>

          <input
            {...register('psw', {
              required: 'Password Field Required',
              maxLength: { value: 15, message: 'Maximum 15 Characters' },
              minLength: { value: 4, message: 'Minimum 4 Characters' },
            })}
            type='password'
            placeholder="Password"
          />
          <span className="error">{errors?.psw && errors.psw.message}</span>

          {isSignUp && <label><input type="checkbox" /> Remember Me</label>}
          <button type='submit'>
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>

          <span className="text-secondary" onClick={() => setIsSignUp(!isSignUp)} style={{ cursor: 'pointer' }}>
            {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Auth;
