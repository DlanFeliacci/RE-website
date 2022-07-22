import "./Best.css"
import ph1 from "../../assets/4.jpg"
import ph2 from "../../assets/7.jpg"
import ph3 from "../../assets/8.jpg"
import ph4 from "../../assets/10.jpg"

const Best = () => {
  return (
    <div className="best">
        <h1>Find Best Rated Properties</h1>
        <div>
            <p><span className="bold">All</span></p>
            <p>Commercial</p>
            <p>Residential</p>
            <p>Agricultural</p>
        </div>
        <div className="container">
            <img src={ph1} alt="" />
            <img src={ph2} alt="" />
            <img src={ph3} alt="" />
            <img src={ph4} alt="" />
        </div>
        <button className="btn">View All</button>
    </div>
  )
}

export default Best