import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";


import Navigation from "./Navigation";
import Phonebook from "./PhoneBook";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { refreshThunk } from "redux/authReduser";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";

const appRoutes = [
  { path: '/', element: (
    <RestrictedRoute >
    <Home />
   </RestrictedRoute>) },
  { path: '/contacts', element: 
   (<PrivateRoute>
    <Phonebook />
    </PrivateRoute>) }, 

  { path: '/login', element:(
   <RestrictedRoute >
      <LoginPage />
    </RestrictedRoute>)},

  { path: '/register', element:(
   <RestrictedRoute >
      <RegisterPage />
     </RestrictedRoute>)},

  { path: '*', element: <NotFound message={`Not Found`}/> },
];

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {dispatch(refreshThunk())},[dispatch]);
  return (
    <div>
      <Navigation />
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
    </div>
  );
};

export default App;
