import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';

function EditDescriptionModalContent({heading}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex flex-col items-center gap-2 w-96">
        <label className="text-lg" htmlFor="">
          Description
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="description"
          variant="outlined"
          size="small"
          fullWidth
          multiline
          maxRows={8}
          // sx={{mb: '0.5rem'}}
        />
      </div>
      <Button variant="contained">Confirm</Button>
    </>
  );
}

EditDescriptionModalContent.propTypes = {
  heading: PropTypes.string,
};

export default EditDescriptionModalContent;
