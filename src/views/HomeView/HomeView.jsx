import React from "react";
import s from "./HomeView.module.css";

export default function HomeView() {
  return (
    <div className={s.text}>
      <div className={s.Msg}>Welcome to the PHONEBOOK!</div>
      <div className={s.infoMsg}>To start work, please Sign up or Log in.</div>
    </div>
  );
}
