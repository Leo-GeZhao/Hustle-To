import './Sneakers.css'

export default function Sneaker({sneaker}){
    return (
                <div className="card col">
                    <img src="" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{sneaker.name}</h5>
                        <h5>${sneaker.price} CAD</h5>
                        {/* <h5>Size: {sneaker.size}</h5> */}
                    </div>
                </div>
    )
}