import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer(){
    return (
        <footer>
        <div className='d-flex justify-content-evenly align-items-center footer'>
            <div className='d-flex flex-column align-items-start'>
                <div className='footer-title'>About</div>
                <Link to="#">Search</Link>
                <Link to="#">About Us</Link>
                <Link to="#">Contact Us</Link>
                <Link to="#">Editorial</Link>
                <Link to="#">All Products</Link>
            </div> 
            <div className='d-flex flex-column'>
                <div className='footer-title'>Policy</div>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Shipping & Refund Policy</Link>
                <Link to="#">Consignment</Link>
                <Link to="#">Terms if service</Link>
                <Link to="#">FAQs</Link>
            </div>
            <div className='d-flex flex-column align-items-start'>
                <div className='footer-title'>SUBCRIBE TO OUR NEWSLETTER</div>
                <input className="footer-input" type="text" placeholder='Enter your email'/>
            </div>
        </div>
        </footer>
    )
}