import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./loginmodal.module.css";
import Input from "../../shared/ui/Input/Input";
import { FilledButton, GhostButton } from "../../shared/ui/Button/Button";
import { useLoginMutation } from "../../app/api/authApi";
import { setLoggedIn } from "../auth/authSlice";

export default function LoginModal({ closeModal }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const { data } = await login({ username, password });
      dispatch(setLoggedIn(data.token));
      closeModal();
    } catch (error) {
      setError('неверные данные')
      console.error("Ошибка авторизации:", error.message);
    }
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className={`${styles.box}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.auth}`}>Авторизация</div>
        <div className={`${styles.close}`} onClick={closeModal}>
          &times;
        </div>
      </div>
      <Input
        required
        placeholder={"Введите логин"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={error}
      >
        Логин
      </Input>
      <Input
        required
        placeholder={"Введите пароль"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={error}
      >
        Пароль
      </Input>
      <div className={`${styles.button_box}`}>
        <FilledButton type="button" onClick={handleLogin} disabled={isLoading}>
          {isLoading ? "Вход..." : "Войти"}
        </FilledButton>
        <GhostButton type="button" onClick={handleCancel}>
          Отменить
        </GhostButton>
      </div>
    </div>
  );
}
