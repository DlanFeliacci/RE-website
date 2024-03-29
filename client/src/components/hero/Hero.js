import React from 'react'
import "./Hero.css"
import {AiOutlineSearch} from "react-icons/ai"

const Hero = () => {
  return (
    <div className="hero">
        <div className="content">
            <h1>Perfect place for you</h1>
            <p className="search-text">Déposez une annonce ou cherchez un bien en deux cliques !</p>
            <form action="" className="search">
                <div>
                    <input type="text" placeholder="Recherche..." />
                </div>
                <div className="radio">
                    <input name ='radio' value="buy" type="radio" defaultChecked />
                    <label htmlFor='buy'>Vente</label>
                    <input name = 'radio' value="rent" type="radio" />
                    <label htmlFor='rent'>Location</label>
                    <button type="submit"><AiOutlineSearch className="icon"/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero