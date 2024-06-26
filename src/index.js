import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './context/darkMOdeContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <DarkModeContextProvider>
      <AuthContextProvider>
      <App/>
      </AuthContextProvider>
      
    </DarkModeContextProvider>,
    document.getElementById("root")
);


