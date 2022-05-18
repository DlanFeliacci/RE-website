import "./Footer.css"
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="social">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon"/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon"/></a>
            <a href="https://twitter.com/?lang=fr" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon"/></a>
        </div>
        <div className="container">
            <div className="col">
                <h3>About</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About us</p>
            </div>
            <div className="col">
                <h3>company</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About us</p>
            </div>
            <div className="col">
                <h3>Legal</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About us</p>
            </div>
            <div className="col">
                <h3>Information</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About us</p>
            </div>
        </div>
        <div className='copyright'> <p className='c1'>Copyright &copy; 2022 Adlene Feliachi.&nbsp;</p><p className="c2"> All rights reserved.</p></div> 
    </div>
  )
}

export default Footer