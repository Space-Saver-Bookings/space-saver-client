import {Button, Modal} from '@mui/material';
import SettingsForm from '../features/settings/SettingsForm';
import {useState} from 'react';
import ConfirmModal from '../components/modal/ConfirmModal';
import ModalBox from '../components/modal/ModalBox';
import useModal from '../contexts/useModal';

function Settings() {
  const {open, handleClose, handleOpen} = useModal();
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  function handleNo() {
    handleClose();
  }

  // TODO: Logic for deleting account
  function handleYes() {
    handleClose();
  }

  return (
    <section className="flex h-full flex-col items-center justify-center gap-8">
      <SettingsForm disabled={!toggle} />

      {toggle ? (
        <div className="flex gap-8">
          <Button variant="contained" color="error" onClick={handleOpen}>
            Delete Account
          </Button>
          <Button variant="outlined" color="error" onClick={handleToggle}>
            Cancel
          </Button>
          {/* TODO: the handler will change for confiming settings */}
          <Button variant="contained" onClick={handleToggle}>
            Confirm
          </Button>
        </div>
      ) : (
        <Button variant="contained" onClick={handleToggle}>
          Edit
        </Button>
      )}

      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox
            content={<ConfirmModal heading="Are you sure?" handleNo={handleNo} handleYes={handleYes} />}
            height="h-auto"
            width="w-[20rem]"
          />
        </Modal>
      )}
    </section>
  );
}

export default Settings;
