import { useState, Suspense } from 'react'
import {  Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Login from './pages/login'
import Home from './pages/home'
import About from './pages/about'
import ProtectedRoute from './components/protectedRoute'
export default function App(){
const [isLoggedIn, setIsLoggedIn]= useState(false);

return(
  <>
<Suspense fallback={<p>Loading....</p>}>
<Routes>
  //public page
  <Route element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="/login" element={<Login onLogin={()=>setIsLoggedIn(true)}/>} />
   <Route path="/about" element={<About />} />
   
    </Route>
    //private page
    <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>

      </Route>
</Routes>
  </Suspense>
  </>
)
}