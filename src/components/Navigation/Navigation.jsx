import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selector';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={s.navMenu}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.linkActive : s.link)}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? s.linkActive : s.link)}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}

export default Navigation;
