import PropTypes from 'prop-types';
// import Button from '../../components/buttons/Button';
import {Button, TextField} from '@mui/material';

function EditRoomModalContent({heading}) {
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
          maxRows={8}
        />
      </div>
      {/* <div className='flex grow'></div> */}
      <div className="ml-auto mr-5 flex gap-4">
        {/* TODO: Add nested modal here */}
        <Button variant="contained" color="error">
          Delete Room
        </Button>
        <Button variant="contained" color="error">
          Cancel
        </Button>
        <Button variant="contained">Confirm</Button>
      </div>
    </>
  );
}

EditRoomModalContent.propTypes = {
  heading: PropTypes.string,
};

export default EditRoomModalContent;
