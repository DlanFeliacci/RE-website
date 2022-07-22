import axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Cards from '../../components/cards/Cards.js'
import './SearchList.css'
// import Suppr from '../components/Suppr.js'


const SearchList = () => {

  // const [biens, setBiens] = useState('');
  
  // useEffect(() => {
  //   axios.get('http://localhost:5000/biens').then(res => {
  //     setBiens(res.data);
  //     setTimeout(() => console.log(biens),3000)
  //   })
  // },[]);

  // let biens
  // let [bite, setBite] = useState(false)
  // const getBiens = async () => {
  //   biens = await axios.get('http://localhost:5000/biens')
  //   biens = biens.data
  //   setBite(true)
  // }
  // getBiens()
  // setTimeout(() => console.log(biens),5000)


  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        {/* <Suppr /> */}
        <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Filtrer</h1>
            <div className="lsItem">
              <label>Wilaya</label>
              <input placeholder="Ou vous etes?" type="text" />
            </div>
            <div className="lsItem">
              <label>Region</label>
              <input placeholder="Quelle ville?" type="text" />
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Prix min
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Prix max
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Chambres</span>
                  <input
                    type="number"
                    min={1}
                    max={15}
                    className="lsOptionInput"
                    placeholder='test'
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Prix</span>
                  <input
                    min={1}
                    className="lsOptionInput"
                    placeholder='test'
                  />
                </div>
              </div>
            </div>
            <div className="btn-search">
              <button>Recherche</button>
            </div>
            
          </div>
          <div className="listResult">
            {/* {bite && biens.map((bien) => {
              console.log(bien)
              return (<p>zzzzzzzzz</p>)
            })} */}
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
        
    </motion.div>
  )
}

export default SearchList