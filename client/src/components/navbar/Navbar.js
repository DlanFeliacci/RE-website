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
                    <p><BsFillHouseFill className="icon-nav"/>Accueil</p>
                  </li >
                </Link>
                <Link to='recherche'>
                  <li onClick={handleClick}>
                    <p><AiOutlineSearch className="icon-nav"/>Chercher</p>
                  </li>
                </Link>
                <Link to='formulaire'>
                  <li onClick={handleClick}>
                    <p><GoPlus className="icon-nav"/>Ajouter</p>
                  </li >
                </Link>
                <LinkScroll to="footer" smooth={true}  duration={500}>
                  <li onClick={handleClick}>
                    <p><BsInfoCircle className="icon-nav"/>À propos</p>
                  </li> 
                </LinkScroll>
                <LinkScroll to="footer" smooth={true}  duration={500}>
                  <li onClick={handleClick}>
                    <p><BsFillTelephoneFill className="icon-nav"/>Contact</p>
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
