import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route,createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Hero from './components/Hero.jsx'
import Gadets from './components/Gadets.jsx'
import ContactUs from './components/ContactUs.jsx'
import Features from './components/Features.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'


const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/Home' element={<Home/>}> </Route>
      <Route path='/Hero' element={<Hero/>}> </Route>
      <Route path='/Gadgets' element={<Gadets/>}> </Route>
      <Route path='/Features' element={<Features/>}> </Route>
      <Route path='/ContactUs' element={<ContactUs/>}> </Route>
      <Route path='/signup' element={<SignUp/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
  ,
)
