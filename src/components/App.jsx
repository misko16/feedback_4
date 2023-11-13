import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { unstable_startTransition as startTransition } from 'react-dom';

const Navigation = lazy(() => import('./Navigation'));
const Phonebook = lazy(() => import("./PhoneBook"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const appRoutes = [
  { path: '/', element: <Phonebook /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
];

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={(
                <Suspense fallback={<div>Loading...</div>}>
                  {element}
                </Suspense>
              )}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
