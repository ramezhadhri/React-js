import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from '/src/components/pages/home.jsx'


import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'

 const router =createBrowserRouter([{path:"",
                                     element:<App/>
},
{path:"Home",
                                      element: <Home />
}


])

ReactDOM.createRoot(document.getElementById('root')).render(
 
    
      <RouterProvider router={router}></RouterProvider> 
)
