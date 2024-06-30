import styles from "./header.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedOut } from "../../features/auth/authSlice";
import {FilledButton, GhostButton} from "../../shared/ui/Button/Button";
import UserIcon from '../../assets/icons/user.svg'

export default function Header({ open }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(setLoggedOut());
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleLogoClick = () => {
    navigate("/");
  };


  return (
    <header className={`${styles.header}`}>
      <h2 className={styles.logo} onClick={handleLogoClick}>
        Фильмопоиск
      </h2>
      {isLoggedIn ? (
        <div className={`${styles.box}`}>
          <img src={UserIcon} className={`${styles.img_box}`}></img>
          <GhostButton onClick={handleLogout}>Выйти</GhostButton>
        </div>
      ) : (
        <FilledButton onClick={open}>Войти</FilledButton>
      )}
    </header>
  );
}
