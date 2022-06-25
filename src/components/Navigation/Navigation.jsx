import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={s.navMenu}>
      <NavLink
        className={({ isActive }) => (isActive ? s.linkActive : s.link)}
        to="/"
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => (isActive ? s.linkActive : s.link)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}

export default Navigation;
