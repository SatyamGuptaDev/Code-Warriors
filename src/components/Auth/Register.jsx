import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
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
        <Typography  variant='h4'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <p>{isSignUp ? 'Unlock the coding journey!' : 'Welcome back!'}</p>

        <div className="formgroup">
          {isSignUp && (
            <>
              <TextField
                {...register('name', {
                  required: 'Name Field Required',
                  maxLength: { value: 15, message: 'Maximum 15 Characters' },
                })}
                type='text'
                label="Name"
                color="success"
                variant="outlined"
              />
              <Typography color="error" variant='span'>{errors?.name && errors.name.message}</Typography>
            </>
          )}

          <TextField
            {...register('email', { required: 'Email Field Required' })}
            type='email'
            label="Email"
            color="success"
            variant="outlined"
          />
          <Typography color="error" variant='span'>{errors?.email && errors.email.message}</Typography>

          <TextField
            {...register('psw', {
              required: 'Password Field Required',
              maxLength: { value: 15, message: 'Maximum 15 Characters' },
              minLength: { value: 4, message: 'Minimum 4 Characters' },
            })}
            type='password'
            label="Password"
            color="success"
            variant="outlined"
          />
          <Typography color="error" variant='span'>{errors?.psw && errors.psw.message}</Typography>

          {isSignUp && <FormControlLabel control={<Checkbox color="success" />} label="Remember Me" />}
          <Button type='submit' variant="contained">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </Button>

          <Typography color="textSecondary" onClick={() => setIsSignUp(!isSignUp)} style={{ cursor: 'pointer' }}>
            {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
          </Typography>
        </div>
      </form>
    </div>
  );
};

export default Auth;
