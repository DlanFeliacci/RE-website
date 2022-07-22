import "./Footer.css"
import {FaFacebook} from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaViber} from 'react-icons/fa'
import fnai from "../../assets/fnai.png"

const Footer = () => {
  return (
    <div name="footer" className="footer">
        <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100013311584780" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon"/></a>
            <a href="#footer" ><BiMailSend className="icon"/></a>
            <a href="#footer" ><FaViber className="icon"/></a>
        </div>
        <div className="contain">
            <div className="col">
                <h3 className="h font-bold">À propos</h3>
                <p>Est une agence immobilière agréée par l'état situé à Alger, qui travaille et satisfait ses clients depuis 2015.</p>
            </div>
            <div className="col">
                <h3 className="h font-bold">Mail</h3>
                <p>agenceimmob_feliachi@yahoo.fr</p> 
            </div>
            
            <div className="col">
                <h3 className="h font-bold">Adresse</h3>
                <p>Cité Zoubir n-14, Bir Mourad Raïs 16030.</p>
            </div>
            <div className="col">
                <h3 className="h font-bold">Tel</h3>
                <p>0540-20-02-45</p>
                <p>0696-79-55-40</p>
            </div>
        </div>
        <div className="logo-content"><img className="logo-fnai" src={fnai} alt="fnai" /></div>
        <div className='copyright'> <p className='c1'>&copy; 2022 Adlene Feliachi.&nbsp;</p><p className="c2"> All rights reserved.</p></div> 
    </div>
  )
}

export default Footer