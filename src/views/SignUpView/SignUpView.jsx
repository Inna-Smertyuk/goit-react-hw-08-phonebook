import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import s from "./SignUpView.module.css";

function SignUpView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(authOperations.register({ name, email, password }));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.authView}>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <h2> Sign Up</h2>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </label>

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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpView;
