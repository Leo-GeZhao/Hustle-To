export default function Sneaker({sneaker}){
    return (
                <div class="card">
                    <div class="card-body">
                        <div className="card-title">{sneaker.name}</div>
                        <div>${sneaker.price} CAD</div>
                        <div>Size: {sneaker.size}</div>
                    </div>
                </div>
    )
}