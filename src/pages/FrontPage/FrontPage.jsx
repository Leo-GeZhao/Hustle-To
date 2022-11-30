import Banner from "../../components/Front/Banners/Banner"
import Sneaker from "../../components/Front/Sneakers/Sneaker"
import './FrontPage.css'
import Carousel from 'react-bootstrap/Carousel';
export default function FrontPage({sneakers,setSneakers,banners,setBanners}){

    return (
        <div>
            <Carousel>   
                {banners.map((b)=><Banner banner={b}/>)}     
            </Carousel>
            <div className="product">
                <h2>Product Page</h2>
                <div className="row">
                    {sneakers.map((s)=> <Sneaker sneaker={s}/>)}
                </div>
            </div>
        </div>
    )
}