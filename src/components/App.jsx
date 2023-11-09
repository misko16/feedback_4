import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Navigation = lazy(() => import('./Navigation'));
const Phonebook = lazy(() => import("./PhoneBook"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

 export const appRoutes = [
  {path:'/', element: <Phonebook/>},
  {path:'/login', element: <LoginPage/>},
  {path:'/register', element: <RegisterPage/>},
]


export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {appRoutes.map(({path, element}) => (<Route key={path} path={path} element={element} />))};
        </Routes>
      </Suspense>
    </div>
  );
};
