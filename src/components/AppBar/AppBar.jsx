import React from "react";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import s from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.appBar}>
      <Navigation />
      <h1 className={s.headPage}>{isLoggedIn && "Phonebook"}</h1>
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}
