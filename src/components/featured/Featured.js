import "./Featured.css"
import house1 from "../../assets/3.jpg"

const Featured = () => {
  return (
    <div className="featured">
        <h1 className="featured-text">TopFeatured Listing</h1>
        <p>Selected listings by City, State & Zip based on views.</p>
        <div className="container">
            <img src={house1} alt="" />
            <img src={house1} alt="" />
            <img src={house1} alt="" />
            <img src={house1} alt="" />
            <img src={house1} alt="" />
            <div className="span-3 img-details">
                <h2>123 Acme St. Dallas, TX</h2>
                <p>House for Sale</p>
                <p className="price">$2,677,000</p>
            </div>
            <div className="info-grid">
                <div>
                    <div className="info">
                        <p className="bold">Bedrooms:</p><p>5</p>
                    </div>
                    <div className="info">
                        <p className="bold">Bathrooms:</p><p>7</p>
                    </div>
                    <div className="info">
                        <p className="bold">Square Feet:</p><p>5</p>
                    </div>
                    <div className="info">
                        <p className="bold">Est Payment:</p><p>7</p>
                    </div>
                </div>
                <div className="span-2 right-img-details">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button className="btn">View Listing</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Featured