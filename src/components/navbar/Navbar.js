import "./Navbar.css";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill, BsInfoCircle, BsFillTelephoneFill } from "react-icons/bs";
import { GoPlus } from 'react-icons/go'
import {AiOutlineSearch} from "react-icons/ai"
import Logo from "../../assets/logo-agence-nobackground.png"
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'


const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className='navbar'>
        <div className="contenaire">
            <Link to='/'><div> <img className="logo" src={Logo} alt="" /></div></Link>
            {/* <button className="btn">Sign in</button> */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link to='/'>
                  <li onClick={handleClick}>
                    <a href="#"><BsFillHouseFill className="icon-nav"/>Accueil</a>
                  </li >
                </Link>
                <Link to='recherche'>
                  <li onClick={handleClick}>
                    <a href="#"><AiOutlineSearch className="icon-nav"/>Chercher</a>
                  </li>
                </Link>
                <Link to='formulaire'>
                  <li onClick={handleClick}>
                    <a href="#"><GoPlus className="icon-nav"/>Ajouter</a>
                  </li >
                </Link>
                <LinkScroll to="footer" smooth={true}  duration={500}>
                  <li onClick={handleClick}>
                    <a href="#"><BsInfoCircle className="icon-nav"/>À propos</a>
                  </li> 
                </LinkScroll>
                <LinkScroll to="footer" smooth={true}  duration={500}>
                  <li onClick={handleClick}>
                    <a href="footer"><BsFillTelephoneFill className="icon-nav"/>Contact</a>
                  </li>
                </LinkScroll>
            </ul>
            <div className="burger" onClick={handleClick}>
              {click ? (<FaRegTimesCircle className="icon"/>) : (<HiMenuAlt2 className="icon" />)}
                
            </div>
            
        </div>
    </div>
  )
};

export default Navbar;
