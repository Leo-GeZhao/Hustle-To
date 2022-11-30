import './Sneakers.css'

export default function Sneaker({sneaker}){
    return (
                <div className="card col">
                    <img src={`${sneaker.image}`} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{sneaker.name}</h5>
                        <h5>${sneaker.price}.00 CAD</h5>
                       
                    </div>
                </div>
    )
}