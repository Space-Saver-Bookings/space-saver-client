import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';

function EditCodeModalContent({heading}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex w-72 flex-col items-center gap-1">
        <label className="text-lg" htmlFor="">
          Edit Access Code
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="access code"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
      </div>

      <div className="mb-[-1rem]">
        <Button variant="contained">Confirm</Button>
      </div>
    </>
  );
}

EditCodeModalContent.propTypes = {
  heading: PropTypes.string,
};

export default EditCodeModalContent;
