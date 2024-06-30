import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./loginmodal.module.css";
import Input from "../Input/Input";
import { FilledButton, GhostButton } from "../Button/Button";
import { useLoginMutation } from "../../../app/api/authApi";
import { setLoggedIn } from "../../../features/auth/authSlice";

export default function LoginModal() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const { data } = await login({ username, password });
      dispatch(setLoggedIn(data.token));
    } catch (error) {
      console.error("Login failed:", error.message);
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
        <div className={`${styles.close}`}>&times;</div>
      </div>
      <Input
        required
        placeholder={"Введите логин"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      >
        Логин
      </Input>
      <Input
        required
        placeholder={"Введите пароль"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      >
        Пароль
      </Input>
      <div className={`${styles.button_box}`}>
        <FilledButton
          type="button"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? "Вход..." : "Войти"}
        </FilledButton>
        <GhostButton type="button" onClick={handleCancel}>
          Отменить
        </GhostButton>
      </div>
    </div>
  );
}
