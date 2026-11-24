import {NavLink, useSearchParams } from 'react-router'
import products from './data/product'

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
<button onClick={()=>setSearchParams({category: category})}>{category}</button>
<button onClick={()=>setSearchParams({})}>All</button>
        </>
    )
}