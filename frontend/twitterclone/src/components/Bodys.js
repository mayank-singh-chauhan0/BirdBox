import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Feed from './Feed'
import Profile from './Profile'

export default function Bodys() {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home/>,
            children:[
                {
                    path:"/",
                    element:<Feed/>
                },
                {
                    path:"/profile/:id",
                    element:<Profile/>
                }
            ]
        },
        {
            path:"/login",
            element:<Login/>
        }
    ])
  return (
  <div className=''>  <RouterProvider router={appRouter}/></div>
   
  )
}
