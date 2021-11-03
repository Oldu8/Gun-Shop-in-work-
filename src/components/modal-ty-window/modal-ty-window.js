import React from "react";
import "./modal-ty-window.css";
import CrossButton from "../cross-button";

const ModalTyWindow = () => {
  return (
    <React.Fragment>
      <div className="ty__window">
        <h2 className="headline__ty">Thank you for your order!</h2>
      </div>
      <CrossButton />
    </React.Fragment>
  );
};

export default ModalTyWindow;
