import {useParams, useNavigate} from 'react-router'
import products from './data/product'
export default function Details(){

    const {id}= useParams();
    const navigate=useNavigate()
    const product=products.find((p)=>p.id=== Number(id));

    if(!product){
        return <p>Not Found</p>
    }

    return(
    <>
    <h2>Product Detailes</h2>
    <p>Product name: {product.name}</p>
     <p>Product id: {product.id}</p>
      <p>Product name: {product.price}</p>
       <p>Product name: {product.inStock}</p>

       <button onClick={()=>navigate(-1)}>Back</button>
    </>    
    )
}