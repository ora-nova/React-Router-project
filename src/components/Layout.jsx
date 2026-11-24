import {NavLink, Outlet } from 'react-router'


export default function Layout(){
    return(
        <>
        <nav>
<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/login">Login</NavLink>
<NavLink to="/products">Productlist</NavLink>
<NavLink to="*">404</NavLink>
</nav>
<main>
    <Outlet />
    </main>
        </>
    )
}