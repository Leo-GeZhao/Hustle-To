import { Link } from "react-router-dom"
export default function Product({sneaker}){
    return (
        <Link to={`/admin/product/${sneaker.name}`} state={sneaker}>
            <div>{sneaker.name}</div>
        </Link>
    )
        
    
}