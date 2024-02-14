import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

export const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
     
          {item.listItems.map((listItem) => (
            <Link to="/" className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>

        //    {/* //I have to map through the menu array and display the list items that's why
        //    I have commented out the code below to avoid repetition and long code. */}
        //    {/* <div className="item">
        //   <span className="title">MAIN</span>

        // <Link to="/home" className="listItem">
        // <img src="/home.svg" alt="" />
        // <span className="listItemTitle">HOME</span>
        // </Link>

        // <Link to="/" className="listItem">
        // <img src="/profile.svg" alt="" />
        // <span className="listItemTitle">Profile</span>
        // </Link>
        //    </div> */}
      ))}
    </div>
  );
};
export default Menu;

    /* To link a page in React we use the Link component from the
          react-router-dom library. The Link component is used to navigate
          between pages in a React application. The Link component is similar to
          the anchor tag in HTML. */