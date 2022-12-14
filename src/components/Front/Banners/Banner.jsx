
import './Banners.css'
export default function Banner({banner}){

    return (
        <div className="carousel-item active" data-bs-interval="7000">
            <img className="d-block w-100" src={`${banner.image}`} alt="" />
            <div className="carousel-caption d-none d-md-block">
                <h5 className='banner-title'>{banner.name}</h5>
            </div>
        </div>
    )
}