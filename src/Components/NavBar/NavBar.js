import Netflix from '../../assets/Netflix.jpg'
import {Link} from 'react-router-dom'
import './NavBar.css'
function NavBar(){
    return(
        <div className="nav-bar">           
            <Link to="/" className='logo-img'><img src={Netflix}/></Link>
            <Link to="/"  className='nav-bar-item'>Movies</Link>
            <Link to="/watchList" className='nav-bar-item'>WatchList</Link>
        </div>
    )
}
export default NavBar