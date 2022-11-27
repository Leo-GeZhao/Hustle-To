import { useLocation } from "react-router-dom";
export default function AdminProductDetailPage(){
    const location = useLocation();
    const sneaker = location.state;
    return (
        <div className="card">
            <div>Product Detail Page</div>
            <div>{sneaker.name}</div>
            <div>{sneaker.price}</div>
            <div>{sneaker.size}</div>
            <div>{sneaker.description}</div>
        </div>
    )
}