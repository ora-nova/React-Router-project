import {NavLink, Outlet} from 'react-router'

export default function DashboardLayout(){
    return(
        <>
        <h1>My DahsBoard</h1>
<nav>
    <NavLink to="/dashboard">Overview</NavLink>
    <NavLink to="/dashboard/settings">Settings</NavLink>
    <NavLink to="/dashboard/profile">Profile</NavLink>
</nav>
<main>
    <Outlet />
</main>
        </>
    )
}