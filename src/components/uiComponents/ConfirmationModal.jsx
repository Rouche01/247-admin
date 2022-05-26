import React from "react";
import CenterModal from "./CenterModal";

const ConfirmationModal = ({ open, setOpen, icon, text, handleConfirmation }) => {
  return (
    <CenterModal modalOpen={open} setModalOpen={setOpen}>
      <div className="text-center">
        <div className="mx-auto inline-block">{icon}</div>
        <p className="text-white text-2xl mt-5 font-medium">{text}</p>
        <div className="flex items-center justify-center mt-6 gap-7">
          <button
            onClick={handleConfirmation}
            className="text-white bg-247-red-straight px-5 py-2 rounded-md font-medium text-base"
          >
            Yes
          </button>
          <button
            onClick={() => setOpen(false)}
            className="text-247-campaign-preview-title bg-white px-5 py-2 rounded-md font-medium"
          >
            No
          </button>
        </div>
      </div>
    </CenterModal>
  );
};

export default ConfirmationModal;
