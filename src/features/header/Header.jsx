import styles from "./header.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLoggedOut } from "../../features/auth/authSlice"; // Укажите путь к вашему authSlice
import {FilledButton, GhostButton} from "../../shared/ui/Button/Button";

export default function Header({ open }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLoggedOut());
    localStorage.removeItem("token");
    window.location.reload();
  };
  
  return (
    <header className={`${styles.header}`}>
      Фильмопоиск
      {isLoggedIn ? (
        <div className={`${styles.box}`}>
          <div className={`${styles.img_box}`}></div>
          <GhostButton onClick={handleLogout}>Выйти</GhostButton>
        </div>
      ) : (
        <FilledButton onClick={open}>Войти</FilledButton>
      )}
    </header>
  );
}
