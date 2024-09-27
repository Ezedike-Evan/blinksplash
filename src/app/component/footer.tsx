import { FaXTwitter,FaFacebook,FaInstagram,FaGithub,FaLinkedin,FaTelegram,FaDiscord } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"

const Footer = ()=>{
    return (
        <footer>
            <ul>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaTelegram /></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaDiscord /></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><SiGmail /></a></li>
            </ul>
            tip me(this will be a buy me blink link)
            <p>&copy; made by the maverick alchemist of tech</p>
        </footer>
    )
  }
  
  export default Footer