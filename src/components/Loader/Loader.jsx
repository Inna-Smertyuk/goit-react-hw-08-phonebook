import React from "react";
import { Circles } from "react-loader-spinner";
import s from "../Loader/Loader.module.css";

export default function Loader() {
  return (
    <div className={s.loader}>
      <Circles height="120" width="120" color="rgb(122, 130, 205)" />
    </div>
  );
}
