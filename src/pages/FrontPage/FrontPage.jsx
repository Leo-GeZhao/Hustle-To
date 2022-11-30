import Banner from "../../components/Front/Banners/Banner"
import Sneaker from "../../components/Front/Sneakers/Sneaker"
import './FrontPage.css'
import Carousel from 'react-bootstrap/Carousel'
export default function FrontPage({sneakers,setSneakers,banners,setBanners}){

    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                {banners.map((b)=><Banner banner={b}/>)}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>    
            </div>
            <div className="Footware">
                <h5>FOOTWARE</h5>
                <div className="container text-center">
                    <div className="row row-cols-5">
                        {sneakers.map((s)=> <Sneaker sneaker={s}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}