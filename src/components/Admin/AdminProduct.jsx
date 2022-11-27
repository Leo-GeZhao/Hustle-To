import { Link } from "react-router-dom"
export default function Product({sneaker}){
    return (
        <Link to={`/admin/product/${sneaker.name}`}>
            <div>{sneaker.name}</div>
        </Link>
    )
        
    
}