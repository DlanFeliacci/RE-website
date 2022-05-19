import "./Navbar.css";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className='navbar'>
        <div className="container">
            <h1><span><BsFillHouseFill />Agency</span>++</h1>
            {/* <button className="btn">Sign in</button> */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Chercher</a></li>
                <li><a href="#footer">À propos</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
            <div className="burger" onClick={handleClick}>
              {click ? (<FaRegTimesCircle className="icon"/>) : (<HiMenuAlt2 className="icon" />)}
                
            </div>
            
        </div>
    </div>
  )
};

export default Navbar;
