import {Navigate, useLocation, Outlet} from 'react-router'

export default function ProtectedRoute({isLoggedIn}){
const location=useLocation();

if(!isLoggedIn){
    return <Navigate to="/login" replace state={{from:location}}/>
}
return <Outlet />
}