import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Challenges from './components/Challenges';
import FAQ from './components/FAQ.jsx';
import HallOfFame from './components/HallOfFame.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "challenges",
        element: <Challenges />,
      },
      {
        path: "hall-of-fame",
        element: <HallOfFame />,
      },
      {
        path: "faq",
        element: <FAQ />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
