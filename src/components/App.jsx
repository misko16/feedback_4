import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Phonebook from "./PhoneBook";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const appRoutes = [
  { path: '/', element: <Phonebook /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
];

const App = () => {
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
