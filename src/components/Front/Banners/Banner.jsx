import { CarouselItem } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
export default function Banner({banner}){

    return (
        <Carousel.Item>
            <img className="d-block w-100 " src={`${banner.image}`} alt="" />
        </Carousel.Item>
    )
}