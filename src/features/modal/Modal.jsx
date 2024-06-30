import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import LoginModal from "../LoginModal/LoginModal";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modalOpen");
    } else {
      document.body.classList.remove("modalOpen");
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    <div className={`${styles.modalOverlay}`} onClick={onClose}>
      <div
        className={`${styles.modalContent}`}
        onClick={(e) => e.stopPropagation()}
      >
        <LoginModal closeModal={onClose}></LoginModal>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
