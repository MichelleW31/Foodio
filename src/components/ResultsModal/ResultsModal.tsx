// BASE MODULES
import Modal from 'react-modal';

// CUSTOM MODULES
import styles from './ResultsModal.module.scss';

interface ResultsModalProps {
  modalOpen: boolean;
  setModalOpen: (boolean: boolean) => void;
  copy: string;
}

const ResultsModal = ({ modalOpen, setModalOpen, copy }: ResultsModalProps) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      className={styles.Modal}
    >
      <p>{copy}</p>

      <button
        type="button"
        onClick={() => setModalOpen(false)}
        className={styles.Button}
      >
        Close
      </button>
    </Modal>
  );
};

export default ResultsModal;
