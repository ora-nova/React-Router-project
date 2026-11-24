import { useState, Suspense } from 'react'
import {  Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Login from './pages/login'
import Home from './pages/home'
import About from './pages/about'
import ProtectedRoute from './components/protectedRoute'
import ProductList from './pages/productList'
import Details from './pages/productDetails'
import Overview from './dashboard/overview'
import Profile from './dashboard/profile'
import Settings from './dashboard/setting'
import DashboardLayout from './components/dashboardLayout'
import Not from './pages/notfound'
export default function App(){
const [isLoggedIn, setIsLoggedIn]= useState(false);

return(
  <>
<Suspense fallback={<p>Loading....</p>}>
<Routes>
  {/*Public Pages */}
  <Route element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="/login" element={<Login onLogin={()=>setIsLoggedIn(true)}/>} />
   <Route path="/about" element={<About />} />
   <Route path="/products" element={<ProductList />} />
    <Route path='/product/:id' element={<Details />}/>
    <Route path='*' element={<Not />}/>
    </Route>
      {/*Private Pages */}
    <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
<Route path="/dashboard" element={<DashboardLayout />} >
<Route index element={<Overview/>} />
<Route path='profile' element={<Profile />} />
<Route path='settings' element={<Settings />} />
</Route>
      </Route>
</Routes>
  </Suspense>
  </>
)
}