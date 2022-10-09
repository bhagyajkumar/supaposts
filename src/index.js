import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Auth from './components/Auth';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      
    },
    {
      path: "/auth",
      element: <Auth />
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);