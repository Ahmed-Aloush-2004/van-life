import {  NavLink } from "react-router-dom";

function Header() {

  return (
    <header>
      <NavLink className="site-logo "  to={"/"}>
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink className={({isActive})=>isActive? "active-link":null} to={"/host"}>Host</NavLink>
        <NavLink className={({isActive})=>isActive? "active-link":null} to={"/about"}>About</NavLink>
        <NavLink className={({isActive})=>isActive? "active-link":null} to={"/vans"}>Vans</NavLink>
      </nav>
    </header>
  );
}

export default Header;
