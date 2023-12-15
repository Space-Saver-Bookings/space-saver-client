import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';

function AddNewUserModalContent({heading}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex w-72 flex-col items-center gap-2">
        <label className="text-lg" htmlFor="">
          User Email
        </label>
        <TextField
          required
          id="outlined-basic"
          label="email"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
      </div>

      <div className='mb-[-1rem]'>
        <Button variant="contained">Add User</Button>
      </div>
    </>
  );
}

AddNewUserModalContent.propTypes = {
  heading: PropTypes.string,
};

export default AddNewUserModalContent;
