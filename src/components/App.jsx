import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';


import { Navigation } from './navigation/Navigation';
import { refreshThunk } from '../redux/auth/operations';
import { useAuth } from './hooks/auth';
import { Update } from './update/update';
import  RestrictedRoute  from '../components/RestrictedRoute';
import  PrivatRoute  from './PrivateRoute';

const Contacts = lazy(() => import('./PhoneBook'));
const Register = lazy(() => import('./pages/RegisterPage'));
const Login = lazy(() => import('./pages/LoginPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Update />
  ) : (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={<PrivatRoute component={Contacts} redirectTo="/login" />}
        />
        <Route
          path="contacts"
          element={<PrivatRoute component={Contacts} redirectTo="/login" />}
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};