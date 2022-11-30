import './Footer.css'

export default function Footer(){
    return (
        <footer>
        <div className='d-flex justify-content-evenly align-items-center footer'>
            <div className='d-flex flex-column align-items-start'>
                <div className='footer-title'>About</div>
                <a href="#">Search</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="#">Editorial</a>
                <a href="#">All Products</a>
            </div> 
            <div className='d-flex flex-column'>
                <div className='footer-title'>Policy</div>
                <a href="#">Privacy Policy</a>
                <a href="#">Shipping & Refund Policy</a>
                <a href="#">Consignment</a>
                <a href="#">Terms if service</a>
                <a href="#">FAQs</a>
            </div>
            <div className='d-flex flex-column align-items-start'>
                <div className='footer-title'>SUBCRIBE TO OUR NEWSLETTER</div>
                <input className="footer-input" type="text" placeholder='Enter your email'/>
            </div>
        </div>
        </footer>
    )
}