import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/* Images for page */
import HomeImg from '../assets/home.png';
import SitterImg from '../assets/Sitters.png';
import PostImg from '../assets/post.jpg';

function Nav(){
    return(
        <div>
            <div id='navBar'>
  <a href="/" className="site-title">Find A Sitter</a>
  <Link to={{pathname: `/`}} className="headerImage"><img src={HomeImg} alt="Home Image"></img></Link>
  <Link to={{pathname: `/sitters`}} className="headerImage"><img src={SitterImg} alt="babysitter image"></img></Link>
  <Link to={{pathname: `/post`}} className="headerImage"><img src={PostImg} alt="post image"></img></Link>
            </div>
        </div>
    )
}
export default Nav;