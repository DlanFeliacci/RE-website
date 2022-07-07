import { motion } from 'framer-motion'
import Cards from '../../components/cards/Cards.js'
import './SearchList.css'
// import Suppr from '../components/Suppr.js'


const SearchList = () => {
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