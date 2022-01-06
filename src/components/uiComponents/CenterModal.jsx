import React from "react";
import Modal from "react-modal";

const CenterModal = ({ modalOpen, setModalOpen, children }) => {
  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#282C31",
      border: "1px solid #282C31",
      borderRadius: "8px",
      width: "650px",
      padding: "28px 32px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.86)",
    },
  };

  return (
    <Modal
      isOpen={modalOpen}
      style={modalStyle}
      onRequestClose={() => setModalOpen(false)}
    >
      {children}
    </Modal>
  );
};

export default CenterModal;