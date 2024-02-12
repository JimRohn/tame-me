import { Link } from "react-router-dom"
import "./menu.scss"

export const Menu = () => {
  return (
    <div className="menu">
         <div className="item">
        <span className="title">MAIN</span>
        {/* To link a page in React we use the Link component from 
        the react-router-dom library. The Link component is used to navigate between pages in a React application.
        The Link component is similar to the anchor tag in HTML. */}
      <Link to="/home">
      <img src="/home.svg" alt="" />
      <span className="ListItemTitle">HOME</span>
      </Link>
      
      <Link to="/profile">
      <img src="/profile.svg" alt="" />
      <span className="ListItemTitle">Profile</span>
      </Link>
         </div>
         <div className="item">
        <span className="title">MAIN</span>
        {/* To link a page in React we use the Link component from 
        the react-router-dom library. The Link component is used to navigate between pages in a React application.
        The Link component is similar to the anchor tag in HTML. */}
      <Link to="/home">
      <img src="/home.svg" alt="" />
      <span className="ListItemTitle">HOME</span>
      </Link>
      
      <Link to="/profile">
      <img src="/profile.svg" alt="" />
      <span className="ListItemTitle">Profile</span>
      </Link>
         </div>
      </div>
  )
}
export default Menu
