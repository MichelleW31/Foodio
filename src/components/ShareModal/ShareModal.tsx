// BASE MODULES
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Modal from 'react-modal';

// CUSTOM MODULES
import XIcon from '../icons/XIcon/XIcon';
import styles from './ShareModal.module.scss';

interface ShareModalProps {
  modalOpen: boolean;
  setModalOpen: (boolean: boolean) => void;
  setShowMessageResults: (boolean: boolean) => void;
  setHasSendingError: (boolean: boolean) => void;
  recipeLink: string;
}

const ShareModal = ({
  modalOpen,
  setModalOpen,
  setShowMessageResults,
  setHasSendingError,
  recipeLink,
}: ShareModalProps) => {
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');

  const [recipients, setRecipients] = useState<string[]>(['']);

  const closeModal = () => {
    setModalOpen(false);
  };

  const updateRecipientEmail = (index: number, recipientEmail: string) => {
    const newArray = recipients.map((recipient, i) => {
      if (index === i) {
        return recipientEmail;
      } else {
        return recipient;
      }
    });

    setRecipients(newArray);
  };

  const addAdditionalRecipient = () => {
    setRecipients((array) => [...array, '']);
  };

  const removeAdditionalRecipient = () => {
    setRecipients((previousArr) => previousArr.slice(0, -1));
  };

  const clearInputs = () => {
    setSenderName('');
    setSenderEmail('');
    setRecipients(['']);
  };

  // SHARE RECIPE
  const shareRecipe = () => {
    recipients.forEach((recipient) => {
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          {
            name: senderName,
            from_email: senderEmail,
            to_email: recipient,
            link: recipeLink,
          },
          { publicKey: import.meta.env.VITE_PUBLIC_KEY }
        )
        .then(
          (result) => {
            console.log('Message sent successfully:', result.text);
            setShowMessageResults(true);
            setModalOpen(false);
            setHasSendingError(false);
            clearInputs();
          },
          (error) => {
            console.error('Error sending message:', error);
            setShowMessageResults(true);
            setModalOpen(false);
            setHasSendingError(true);
            clearInputs();
          }
        );
    });
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      className={styles.Modal}
    >
      <XIcon color="#467e8d" closeModal={closeModal} />

      <h2>Share recipe</h2>
      <section className={styles.FormContainer}>
        <section>
          <p>Your Name</p>
          <input
            value={senderName}
            onChange={(e) => {
              setSenderName(e.target.value);
            }}
            placeholder="Your Name"
            type="text"
            className={styles.Input}
          />

          <p>Your Email</p>
          <input
            value={senderEmail}
            onChange={(e) => {
              setSenderEmail(e.target.value);
            }}
            placeholder="Your Email"
            type="text"
            className={styles.Input}
          />
        </section>

        <h3>Who would like to share this recipe with?</h3>
        {recipients.map((recipient, i) => (
          <section className={styles.Recipient} key={i}>
            <p>Recipient</p>

            <input
              value={recipients[i]}
              onChange={(e) => {
                updateRecipientEmail(i, e.target.value);
              }}
              placeholder="Recipient Email"
              type="text"
              className={styles.Input}
            />
          </section>
        ))}

        <section className={styles.AddRemoveContainer}>
          <p
            className={styles.AddRemoveStudentCopy}
            onClick={() => addAdditionalRecipient()}
          >
            Add Additional Recipient +
          </p>

          {recipients.length > 1 && (
            <p
              className={styles.AddRemoveStudentCopy}
              onClick={() => removeAdditionalRecipient()}
            >
              Remove Recipient -
            </p>
          )}
        </section>

        <button type="button" onClick={shareRecipe} className={styles.Button}>
          Share Recipe
        </button>
      </section>
    </Modal>
  );
};

export default ShareModal;
