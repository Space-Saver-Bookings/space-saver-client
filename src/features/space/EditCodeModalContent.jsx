import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';

function EditCodeModalContent({heading}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex flex-col items-center gap-2">
        <label className="text-lg" htmlFor="">
          Edit Access Code
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="access code"
          variant="outlined"
          size="small"
          fullWidth
          // sx={{mb: '0.5rem'}}
        />
      </div>

      <Button variant="contained">Confirm</Button>
    </>
  );
}

EditCodeModalContent.propTypes = {
  heading: PropTypes.string,
};

export default EditCodeModalContent;
