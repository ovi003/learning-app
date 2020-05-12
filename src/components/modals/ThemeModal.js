import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
function ThemeModal({ isModalOpen, modalToggle, children, title }) {
  return (
    <Modal centered isOpen={isModalOpen} toggle={modalToggle}>
      <ModalHeader className="text-center">{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
}

export default ThemeModal;
