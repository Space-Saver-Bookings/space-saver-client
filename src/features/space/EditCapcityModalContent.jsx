import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';

function EditCapacityModalContent({heading}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex w-64 items-center justify-center gap-8">
        <div className="flex flex-col gap-1">
          <label className="text-lg" htmlFor="">
            Rooms
          </label>
          <TextField
            required
            // defaultValue="Space Name"
            id="outlined-basic"
            label="amount"
            variant="outlined"
            fullWidth
            // sx={{mb: '0.5rem'}}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg" htmlFor="">
            People
          </label>
          <TextField
            required
            // defaultValue="Space Name"
            id="outlined-basic"
            label="amount"
            variant="outlined"
            fullWidth
            // sx={{mb: '0.5rem'}}
          />
        </div>
      </div>

      {/* <Button variant="contained">Confirm</Button> */}
      <div className="mx-auto pl-7 pt-3 mb-[-1rem] flex gap-4">
        <Button variant="contained" color="error">
          Cancel
        </Button>
        <Button variant="contained">Create New Space</Button>
      </div>
    </>
  );
}

EditCapacityModalContent.propTypes = {
  heading: PropTypes.string,
};

export default EditCapacityModalContent;
