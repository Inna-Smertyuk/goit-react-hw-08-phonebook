import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import s from "./LogInView.module.css";

export default function LogInView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className={s.authView}>
        <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
          <h2> Log In</h2>
          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              required
              onChange={handleChange}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              required
              onChange={handleChange}
            />
          </label>

          <button className={s.button} type="submit">
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
