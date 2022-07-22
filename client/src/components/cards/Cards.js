import ChambreIMG from "../../assets/3.jpg";
import './Cards.css'

const Cards = () => {
  return (
    <div className="searchItem">
      <img
        src={ChambreIMG}
        alt="img"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Vente</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="siPrice">500.000 &nbsp; <small>Dzd</small></span>
          <button className="siCheckButton">Plus</button>
        </div>
      </div>
    </div>
  )
}

export default Cards