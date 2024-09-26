import { FaXTwitter,FaFacebook,FaInstagram,FaGithub } from "react-icons/fa6"
const Footer = ()=>{
    return (
        <footer>
            <ul>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
            </ul>
            <p>&copy; made by the maverick alchemist of tech</p>
        </footer>
    )
  }
  
  export default Footer