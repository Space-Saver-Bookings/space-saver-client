import PropTypes from 'prop-types';
// import Button from '../../components/buttons/Button';
import {Button, TextField} from '@mui/material';
import useModal from '../../contexts/useModal';

function AddNewRoomModalContent({heading}) {
  const {handleClose} = useModal();
  return (
    <>
      <h4 className="mb-2 mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex w-72 flex-col items-center gap-1">
        <label className="self-start text-lg" htmlFor="">
          Room Name
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="required"
          variant="outlined"
          size="small"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
        <label className="self-start text-lg" htmlFor="">
          Capacity
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="required"
          variant="outlined"
          size="small"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
        <label className="self-start text-lg" htmlFor="">
          Description
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="required"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
          multiline
          maxRows={6}
        />
      </div>

      <div className="mb-[-1rem] ml-auto mr-5 flex gap-4">
        <Button variant="contained" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained">Add Room</Button>
      </div>
    </>
  );
}

AddNewRoomModalContent.propTypes = {
  heading: PropTypes.string,
};

export default AddNewRoomModalContent;
