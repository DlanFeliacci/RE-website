import axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Cards from '../../components/cards/Cards.js'
import './SearchList.css'
// import Suppr from '../components/Suppr.js'


const SearchList = () => {

  const [commune, setCommune] = useState(null)
  useEffect(()=>{
    axios
    .get('https://algerian-cities.bel4.com/api/communes')
    .then(response => {
      console.log(response.data.map((iter) => {
        return iter.name
      }))
      setCommune(response.data)
    })
    .catch(error => console.log(error.message))
  }, []);


  

  const [biens, setBiens] = useState(null);
  
  // get request to send data to server
  useEffect(() => {
    axios.get('http://localhost:5000/biens').then(res => {
      setBiens(res.data);
      // setTimeout(() => console.log(biens),3000)
    })
  },[]);


  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        {/* <Suppr /> */}
        <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Que cherchez vous?</h1>
            <div className="lsItem">
              <label>Type de Bien</label>
              <select className='mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' defaultValue="selected">
                <option value="selected">Vente</option>
                <option>Location</option>
              </select>
            </div>

            <div className="lsItem">
              <label>Wilaya</label>
              <select className='mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' defaultValue="selected">
                <option>01 - Adrar</option>
                <option>02 - Chlef</option>
                <option>03 - Laghouat</option>
                <option>04 - Oum El Bouaghi</option>
                <option>05 - Batna</option>
                <option>06 - Béjaïa</option>
                <option>07 - Biskra</option>
                <option>08 - Béchar</option>
                <option>09 - Blida</option>
                <option>10 - Bouira</option>
                <option>11 - Tamanrasset</option>
                <option>12 - Tébessa</option>
                <option>13 - Tlemcen</option>
                <option>14 - Tiaret</option>
                <option>15 - Tizi Ouzou</option>
                <option value="selected">16 - Alger</option>
                <option>17 - Djelfa</option>
                <option>18 - Jijel</option>
                <option>19 - Sétif</option>
                <option>20 - Saïda</option>
                <option>21 - Skikda</option>
                <option>22 - Sidi Bel Abbès</option>
                <option>23 - Anabba</option>
                <option>24 - Guelma</option>
                <option>25 - Constantine</option>
                <option>26 - Médéa</option>
                <option>27 - Mostaganem</option>
                <option>28 - Msila</option>
                <option>29 - Mascara</option>
                <option>30 - Ouargla</option>
                <option>31 - Oran</option>
                <option>32 - El Bayadh</option>
                <option>33 - Illizi</option>
                <option>34 - Bordj Bou Arreridj</option>
                <option>35 - Boumerdès</option>
                <option>36 - El Tarf</option>
                <option>37 - Tindouf</option>
                <option>38 - Tissemsilt</option>
                <option>39 - El Oued</option>
                <option>40 - Khenchela</option>
                <option>41 - Souk Ahras</option>
                <option>42 - Tipaza</option>
                <option>43 - Mila</option>
                <option>44 - Aïn Defla</option>
                <option>45 - Naâma</option>
                <option>46 - Aïn Témouchent</option>
                <option>47 - Ghardaïa</option>
                <option>48 - Relizane</option>
                <option>49 - Timimoun</option>
                <option>50 - Bordj Badji Mokhtar</option>
                <option>51 - Ouled Djellal</option>
                <option>52 - Béni Abbès</option>
                <option>53 - In Salah</option>
                <option>54 - In Guezzam</option>
                <option>55 - Touggourt</option>
                <option>56 - Djanet</option>
                <option>57 - El M'Ghair</option>
                <option>58 - El Meniaa</option>
              </select>
            </div>
            
            <div className="lsItem">
              <label>Commune</label>
              <select 
              type="text"
              name="ville"
              id="ville"
              className='mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                {commune && commune.map((iter, i) => {
                // return (<option value={dataForm.ville}>{iter.name}</option>)
                return (<option key={i}>{iter.name}</option>)
              })}
              </select>
              
            </div>
            <div className="lsItem">
              <div className="lsOptions">
              <div className="lsOptionItem">
                  <span className="lsOptionText">Surface</span>
                  <input
                    min={1}
                    className="lsOptionInput p-1 rounded hover:ease-in"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Nombre de Pièces</span>
                  <input
                    type="number"
                    min={1}
                    max={15}
                    className="lsOptionInput p-1 rounded"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Prix min
                  </span>
                  <input type="text" className="lsOptionInput p-1 rounded" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Prix max
                  </span>
                  <input type="text" className="lsOptionInput p-1 rounded" />
                </div>
                
              </div>
            </div>
            <div className="btn-search">
              <button>Recherche</button>
            </div>
            
          </div>
          <div className="listResult">
            {biens && biens.map((bien, i) => {
              // console.log(i)
              return (<Cards bien={bien} key={i}/>)
            }).reverse()}
          </div>
        </div>
      </div>
        
    </motion.div>
  )
}

export default SearchList