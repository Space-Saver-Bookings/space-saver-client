import {Modal} from '@mui/material';
import SettingsForm from '../features/settings/SettingsForm';
import {useState} from 'react';
import ConfirmModal from '../components/modal/ConfirmModal';
import ModalBox from '../components/modal/ModalBox';
import useModal from '../contexts/useModal';

/**
 * Settings is a component that provides user-specific or app-wide settings.
 * It might include toggles for themes, account management options, or other configurations.
 */
function Settings() {
  const {open, handleClose} = useModal();
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  // TODO: Logic for deleting account
  function handleYes() {
    handleClose();
  }

  return (
    <section className="flex h-full flex-col items-center justify-center gap-8">
      <SettingsForm
        isDisabled={!toggle}
        onToggle={handleToggle}
        isToggle={toggle}
      />

      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox
            content={
              <ConfirmModal heading="Are you sure?" handleYes={handleYes} />
            }
            height="h-auto"
            width="w-auto"
          />
        </Modal>
      )}
    </section>
  );
}

export default Settings;
