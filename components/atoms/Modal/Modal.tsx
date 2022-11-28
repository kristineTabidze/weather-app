import { useEffect } from "react";
import ReactPortal from "../../../utils/ReactPortal/ReactPortal";
import { IModal } from "./types";

const Modal: React.FC<IModal> = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="modal">
        <div className="modal__content">
          <button onClick={handleClose} className="close-btn">
            Close
          </button>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
