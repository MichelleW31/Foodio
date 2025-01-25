// BASE MODULES
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';

// CUSTOM MODULES
import XIcon from '../icons/XIcon/XIcon';
import styles from './ShareModal.module.scss';
import { IErrors, IRecipe } from '../../types';

interface ShareModalProps {
  modalOpen: boolean;
  setModalOpen: (boolean: boolean) => void;
  setShowMessageResults: (boolean: boolean) => void;
  setHasSendingError: (boolean: boolean) => void;
  setErrorMessage: (copy: string) => void;
  recipe: IRecipe;
}

const ShareModal = ({
  modalOpen,
  setModalOpen,
  setShowMessageResults,
  setHasSendingError,
  recipe,
  setErrorMessage,
}: ShareModalProps) => {
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');

  const [recipients, setRecipients] = useState<string[]>(['']);

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errors, setErrors] = useState<IErrors>({
    errorStatus: false,
    errorMessage: '',
  });

  const { errorStatus, errorMessage } = errors;
  const errRef = useRef(null);

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

  /////////////
  //ERROR CHECK
  /////////////

  const errorCheck = (): void => {
    const credentialsMessage: string = 'Please fill out all fields to proceed.';

    // empty user info error
    if (senderName === '' || senderEmail === '' || recipients[0] === '') {
      setErrors({
        ...errors,
        errorStatus: true,
        errorMessage: credentialsMessage,
      });
      return;
    } else {
      setErrors({ ...errors, errorStatus: false, errorMessage: '' });
    }
  };

  // SHARE RECIPE
  const shareRecipe = () => {
    if (errorStatus) {
      setShowErrorMessage(true);
      return;
    }

    recipients.forEach((recipient) => {
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          {
            name: senderName,
            from_email: senderEmail,
            to_email: recipient,
            recipe_name: recipe.title,
            recipe_link: recipe.sourceUrl,
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
            setErrorMessage(error.text);
            setShowMessageResults(true);
            setModalOpen(false);
            setHasSendingError(true);
            clearInputs();
          }
        );
    });
  };

  useEffect(() => {
    errorCheck();
  }, [senderName, senderEmail, recipients]);

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

        {/* Error Messaging */}
        {showErrorMessage && (
          <p ref={errRef} aria-live="assertive" className={styles.Error}>
            {errorMessage}
          </p>
        )}
      </section>
    </Modal>
  );
};

export default ShareModal;
