// LoginPage.js

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authReduser';

function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginThunk(data));
    console.log('Login successful');
    reset();
  };

  return (
    <div className='loginPageContainer'>
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="formField">
          <label className="formLabel">Email:</label>
          <input className="formInput" placeholder="Write your email" {...register('email')} required />
        </div>

        <div className="formField">
          <label className="formLabel">Password:</label>
          <input
            className="formInput"
            placeholder="Write your password"
            {...register('password', { required: true, minLength: 6 })}
            type="password"
            required
          />
          {errors.password && (
            <p className="formErrorText">Password must be at least 6 characters long</p>
          )}
        </div>

        <button className="formButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
