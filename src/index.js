import './index.css';
import { ErrorPage, Logement, About, App, Home } from './components'
import { loadAllApartments, loadOneApartment } from './utils/jsonDataLoader'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';


/**
 * Our routing logic
 * Element App is here for layout purpose
 * to have header and footer
 */
const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <Home />,
        loader: loadAllApartments,
      },
      {
        path: "/a-propos",
        element: <About />
      },
      {
        element: <Logement />,
        path: "logement/:logementId",
        loader: async ({ params }) => {
          return loadOneApartment(`${params.logementId}`)
        }
      },

    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);