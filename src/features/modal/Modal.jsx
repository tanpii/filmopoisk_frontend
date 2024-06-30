import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import LoginModal from "../LoginModal/LoginModal";

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`${styles.modal_overlay}`} onClick={onClose}>
      <div
        className={`${styles.modal_content}`}
        onClick={(e) => e.stopPropagation()}
      >
        <LoginModal closeModal={onClose}></LoginModal>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
