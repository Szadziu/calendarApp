import { useEffect, useRef } from "react";
import "./style.scss";

const Modal = ({ day, isDisplay }) => {
  const modalOverlayBackground = useRef(null);

  useEffect(() => {
    modalOverlayBackground.current.addEventListener("click", () =>
      isDisplay(false)
    );
    return modalOverlayBackground.current.removeEventListener("click", () =>
      isDisplay(false)
    );
  }, []);

  return (
    <>
      <div ref={modalOverlayBackground} className="modal-overlay"></div>
      <div className="modal-calendar">
        {`Wybrana data to: ${day.date} 
       Masz ${day.events.length} wydarzeń na ten dzień`}
        <button>add task</button>
      </div>
    </>
  );
};

export default Modal;
