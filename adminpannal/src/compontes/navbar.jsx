import "./navbar.css"
import logo from "../images/logo.jpeg"
function Navabr(){
    return (
        <div>
  <div className="nav">
    <div className="logo"><img src={logo} alt="" /></div>
    <div className="search"><input type="text" placeholder="Search your Products...."/></div>
    <div className="user"><button>Signup</button><button>Login</button></div>
  </div>
  <div className="navbelo"></div>

        </div>
    )
}

export default Navabr;