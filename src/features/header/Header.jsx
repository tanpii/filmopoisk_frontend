import styles from "./header.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLoggedOut } from "../auth/authSlice"; // Укажите путь к вашему authSlice
import { FilledButton, GhostButton } from "../../shared/ui/Button/Button";

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLoggedOut()); // Вызываем action setLoggedOut для выхода пользователя
    localStorage.removeItem("token"); // Удаляем токен из localStorage
    // Дополнительные действия после выхода, например, перенаправление на другую страницу
    window.location.reload(); // Пример обновления текущей страницы
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
        <FilledButton>Войти</FilledButton>
      )}
    </header>
  );
}
