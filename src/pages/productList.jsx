import {NavLink, useSearchParams } from 'react-router'
import products from '../data/product.js';

export default function ProductList(){
    const [searchParams, setSearchParams]=useSearchParams();
    const category=searchParams.get("category");


    const filtered=category? products.filter((p)=>p.category===category):products;
    return(
        <>
        <h1>product list</h1>
        {
            filtered.map((product)=>
            <li key={product.id}>
<NavLink to={`/product/${product.id}`}>{product.name}</NavLink>
                </li>
            )
        }
<button onClick={()=>setSearchParams({category: "electronics"})}>electronics</button>
<button onClick={()=>setSearchParams({})}>All</button>
        </>
    )
}