import { Link } from "react-router-dom";

const Header=()=>{
   return(
    <div>
    <div className="header-container">
        <img src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png" height={100} width={100}  alt="logo"/>
            <ul className="nav-bar">
                <li>
                    <Link to='/'>
                       Home
                    </Link>
                </li>
                <Link to={'/about'}><li>About</li></Link>
                
                <li>
                  <Link to={'/contact'}>
                     Contact
                  </Link>
                </li>
                <li><Link to='/cart'>Add To Cart</Link></li>
            </ul>
    </div>
    </div>
   )
}

export default Header;
