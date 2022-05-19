import "./Footer.css"
import {FaFacebook} from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
        <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100013311584780" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon"/></a>
            <a href="#footer" ><BiMailSend className="icon"/></a>
            <a href="#footer" ><BsFillTelephoneFill className="icon"/></a>
        </div>
        <div className="container">
            <div className="col">
                <h3 className="h">À propos</h3>
                <p>Est une agence immobilière agréer par l'état situé à Alger qui travaille et satisfait ses clients depuis 2015</p>
            </div>
            <div className="col">
                <h3 className="h">Mail</h3>
                <p>agenceimmob_feliachi@yahoo.fr</p> 
            </div>
            
            <div className="col">
                <h3 className="h">Adresse</h3>
                <p>Cité Zoubir n-14, Bir Mourad Raïs 16030.</p>
            </div>
            <div className="col" id="footer">
                <h3 className="h">Tel</h3>
                <p>0540-20-02-45</p>
                <p>0696-79-55-40</p>
            </div>
        </div>
        <div className='copyright'> <p className='c1'>Copyright &copy; 2022 Adlene Feliachi.&nbsp;</p><p className="c2"> All rights reserved.</p></div> 
    </div>
  )
}

export default Footer