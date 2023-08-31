import React, { useState } from 'react';
import CustomModal from '../components/MetrixModal';
import GitHubIcon from "@mui/icons-material/GitHub";

const Modals: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div
                  className="project-button to-primary"
                  onClick={openModal}
                >
                  <div>
                    <button type="button" className="home-button-txt">
                      <GitHubIcon /> Github
                    </button>
                  </div>
                </div>
      <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Modals;