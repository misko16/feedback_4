// RegisterPage.js

import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

function RegisterPage({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    dispatch(onSubmit(data));
    console.log('Registration successful');
    reset();
  };

  return (
    <div className='loginPageContainer'>
      <form className="register-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label className="register-label">Name</label>
          <input className="register-input" placeholder="Write your name" {...register('name', { required: true })} />
        </div>
        <div>
          <label className="register-label">Email</label>
          <input className="register-input" placeholder="Write your email" {...register('email', { required: true })} />
        </div>
        <div>
          <label className="register-label">Password</label>
          <input
            className="register-input"
            placeholder="Write your password"
            {...register('password', { required: true, minLength: 7 })}
            type="password"
          />
          {errors.password && errors.password.type === 'required' && (
            <span className="register-error">Password is required</span>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <span className="register-error">Password must be at least 7 characters long</span>
          )}
        </div>
        <button className="register-submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

RegisterPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterPage;
