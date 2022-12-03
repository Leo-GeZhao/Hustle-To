import Banner from "../../../components/Front/Banners/Banner"
import Sneaker from "../../../components/Front/Sneakers/Sneaker"
import './LandingPage.css'

export default function LandingPage({sneakers,banners}){

    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                {banners.map((b, idx)=><Banner banner={b} key={idx}/>)}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>    
            </div>
            <div className="Footware">
                <h5>FOOTWARE</h5>
                <div className="container-fluid text-center">
                    <div className="row row-cols-6">
                        {sneakers.map((s,idx)=> <Sneaker sneaker={s} key={idx}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}