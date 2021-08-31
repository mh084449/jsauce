import { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
const Header = ({ auth: { authenticated, toggleLogin } }) => {
  const [menuBarsClass, setMenuBarsClass] = useState("");
  const [navBarsClass, setNavBarsClass] = useState("");
  const [searchFormClass, setSearchFormClass] = useState("");
  return (
    <>
      <header>
        <a href="#n" className="logo">
          <i className="fas fa-utensils"></i> jsauce.
        </a>

        <nav className={"navbar " + navBarsClass}>
          <NavLink to="/" exact activeClassName="active">
            home
          </NavLink>{" "}
          <NavLink to="/dishes" activeClassName="active">
            dishes
          </NavLink>{" "}
          <NavLink to="/about" activeClassName="active">
            about
          </NavLink>{" "}
          <NavLink to="/menu" activeClassName="active">
            menu
          </NavLink>{" "}
          <NavLink to="/review" activeClassName="active">
            review
          </NavLink>{" "}
          <NavLink to="/order" activeClassName="active">
            order
          </NavLink>{" "}
          {!authenticated && (
            <NavLink to="/login" activeClassName="active">
              login
            </NavLink>
          )}
          {authenticated && (
            <a href="#n" onClick={toggleLogin}>
              Logout
            </a>
          )}
          <NavLink to="/register" activeClassName="active">
            register
          </NavLink>{" "}
        </nav>

        <div className="icons">
          <i
            onClick={() => {
              setMenuBarsClass(menuBarsClass === "fa-times" ? "" : "fa-times");
              setNavBarsClass(navBarsClass === "active" ? "" : "active");
            }}
            className={"fas fa-bars " + menuBarsClass}
            id="menu-bars"
          ></i>
          <i
            className="fas fa-search"
            id="search-icon"
            onClick={() => {
              setSearchFormClass(navBarsClass === "active" ? "" : "active");
            }}
          ></i>
          <a href="#n" className="fas fa-heart">
            {""}
          </a>
          <a href="#n" className="fas fa-shopping-cart">
            {""}
          </a>
        </div>
      </header>
      <form action="" id="search-form" className={searchFormClass}>
        <input
          type="search"
          placeholder="search here..."
          name=""
          id="search-box"
        />
        <label for="search-box" className="fas fa-search"></label>
        <i
          className="fas fa-times"
          id="close"
          onClick={() => {
            setSearchFormClass("");
          }}
        ></i>
      </form>
    </>
  );
};

export default withRouter(Header);
