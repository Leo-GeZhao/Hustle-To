import Carousel from 'react-bootstrap/Carousel'
export default function Banner({banner}){

    return (
        <div class="carousel-item active">
            <img className="d-block w-100" src={`${banner.image}`} alt="" />
        </div>
        
    )
}