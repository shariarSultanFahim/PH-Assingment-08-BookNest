import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import BookDetails from './Components/BookDetails/BookDetails';
import About from './Components/About/About';
import Faq from './Components/FAQ/Faq';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedbooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/pagestoread',
        element:<PagesToRead></PagesToRead>,
        loader: ()=>fetch('/Book.json')
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/faq',
        element:<Faq></Faq>
      },
      {
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader: ()=>fetch('/Book.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
