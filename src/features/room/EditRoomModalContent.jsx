import PropTypes from 'prop-types';
// import Button from '../../components/buttons/Button';
import {Button, Modal, TextField} from '@mui/material';
import useModal from '../../contexts/useModal';
import ConfirmModal from '../../components/modal/ConfirmModal';
import ModalBox from '../../components/modal/ModalBox';
import {useState} from 'react';

function EditRoomModalContent({heading}) {
  const {open, handleOpen, handleClose} = useModal();
  const [deleteRoom, setDeleteRoom] = useState(false);

  function handleDeleteRoom() {
    setDeleteRoom(true)
    return handleOpen();
  }

  return (
    <>
      <h4 className="mb-2 mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex w-full flex-col items-center gap-1">
        <label className="self-start text-lg" htmlFor="">
          Room Name
        </label>
        <TextField
          required
          id="outlined-basic"
          label="required"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
        <label className="self-start text-lg" htmlFor="">
          Capacity
        </label>
        <TextField
          required
          id="outlined-basic"
          label="required"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
        <label className="self-start text-lg" htmlFor="">
          Description
        </label>
        <TextField
          required
          id="outlined-basic"
          label="required"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
          multiline
          maxRows={8}
        />
      </div>

      <div className="ml-auto mr-5 flex gap-4">
        <Button variant="contained" color="error" onClick={handleDeleteRoom}>
          Delete Room
        </Button>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained">Confirm</Button>
      </div>

      {deleteRoom && open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox
            // TODO: heading should be default and figure out handler yes/no logic to be contained within
            content={<ConfirmModal heading="Are you sure?" />}
            height="h-auto"
            width="w-auto"
          />
        </Modal>
      )}
    </>
  );
}

EditRoomModalContent.propTypes = {
  heading: PropTypes.string,
};

export default EditRoomModalContent;
