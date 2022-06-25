import { NavLink } from 'react-router-dom';
import s from './AuthNavigation.module.css';

export default function AuthNav() {
  return (
    <div className={s.authNav}>
      <NavLink
        to="/signup"
        className={({ isActive }) => (isActive ? s.linkActive : s.link)}
      >
        Sign Up
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.linkActive : s.link)}
      >
        Log In
      </NavLink>
    </div>
  );
}
