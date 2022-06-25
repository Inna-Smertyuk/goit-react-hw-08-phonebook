import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selector";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  return (
    <div className={s.logout}>
      <p className={s.message}>Hello, {userName}!</p>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className={s.Btn}
      >
        Log out
      </button>
    </div>
  );
}
