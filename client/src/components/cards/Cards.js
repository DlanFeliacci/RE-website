import {FaMapMarkerAlt, FaBed} from "react-icons/fa"
import ChambreIMG from "../../assets/3.jpg";
import './Cards.css'

const Cards = (props) => {
  
  return (
    <div className="searchItem">
      <img
        src={ChambreIMG}
        alt="img"
        className="siImg"
      />
      <div className="desc">
        <h1 className="titre">{props.bien.type} à {props.bien.ville}</h1>
        <span className="transaction">{props.bien.transaction}</span>
        <span className="chambreETsurface">
        <div className='cont-address'><FaBed className="address-icon"/><p>{`F${props.bien.chambre} • ${props.bien.surface}m²`}</p></div>
          
          </span>
        <span className="address">
          <div className='cont-address'><FaMapMarkerAlt className='address-icon'/><p>{props.bien.address}</p></div>
          
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="prix">{props.bien.prix} &nbsp;<p className="text-lg pt-1">Da</p></span>
          <button className="plus">Détails</button>
        </div>
      </div>
    </div>
  )
}

export default Cards