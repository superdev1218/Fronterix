import { useState } from "react";

export default function Modal(props) {
    const {
        onClose,
        show
    } = props;

  return (
    <div className="App">

      <form className={`modal ${show ? "visible" : ""}`}>
        <div className="modal-wrapper">
          <input placeholder="Write here something mate" />
          <input placeholder="Here also " />
          <button> Press it ass hard as you can! </button>
        </div>
      </form>
    </div>
  );
}
