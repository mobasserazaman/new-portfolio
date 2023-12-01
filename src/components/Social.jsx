import './social.css';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'

export default function Social() {
    return (
        <>
        <a href='https://www.linkedin.com/in/mobassera-zaman-3b1a2a171/'><img src = {linkedin}></img></a>
        <a href='https://github.com/mobasserazaman'><img src = {github}></img></a>
        <a href='https://www.facebook.com/profile.php?id=100005563665868'><img src = {facebook}></img></a>
        </>
        
    );
  }