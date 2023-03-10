import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/* Images for page */
import HomeImg from '../assets/home.png';
import SitterImg from '../assets/Sitters.png';
import PostImg from '../assets/post.jpg';

function sitterNav(){
    return(
        <div>
            <div id='navSitter'>
  <a href="/" className="site-title">Profile Page</a>             
  <Link to={{pathname: `/`}}><img src={HomeImg} alt="Home Image"></img></Link>
  <Link to={{pathname: `/sitters`}}><img src={SitterImg} alt="babysitter image"></img></Link>
  <Link to={{pathname: `/post`}}><img src={PostImg} alt="post image"></img></Link>
            </div>
        </div>
    )
}
export default sitterNav;