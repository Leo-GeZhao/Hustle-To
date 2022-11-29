import Card from "../../components/Product/Card/Card"
import './ProductPage.css'
export default function ProductPage({sneakers,setSneakers}){

    return (
        <div className="product">
            <div>Product Page</div>
                <div className="row">
                    <div class="col">
                        {sneakers.map((s)=> <Card sneaker={s}/>)}
                    </div>
            </div>
        </div>
    )
}