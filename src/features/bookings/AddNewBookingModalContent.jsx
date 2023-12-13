import PropTypes from 'prop-types';
// import Button from '../../components/buttons/Button';
import {Button, TextField} from '@mui/material';

function AddNewBookingModalContent({heading}) {
  return (
    <>
      <h4 className="mb-2 mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex w-72 flex-col items-center gap-1">
        <label className="self-start text-lg" htmlFor="">
          Booking Title
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
          Date
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
          Start Time
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
          End Time
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
          Notes
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
        <Button variant="contained" color="error">
          Cancel
        </Button>
        <Button variant="contained">Book</Button>
      </div>
    </>
  );
}

AddNewBookingModalContent.propTypes = {
  heading: PropTypes.string,
};

export default AddNewBookingModalContent;
