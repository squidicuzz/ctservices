import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      className="modal-metrix"
    >
            <Image
                  src="https://metrix.place/plc/latest.png?v=123456789"
                  alt="mrx"
                  width="1100"
                  height="1100"
                />
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default CustomModal;