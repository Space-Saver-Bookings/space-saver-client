import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';

function ShareCodeModalContent({heading}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex w-72 flex-col items-center gap-1">
        <label className="text-lg" htmlFor="">
          User Email
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="email"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
      </div>

      <div className="mb-[-1rem]">
        {/* TODO: change this to process and submit form */}
        <Button variant="contained">Share</Button>
      </div>
    </>
  );
}

ShareCodeModalContent.propTypes = {
  heading: PropTypes.string,
};

export default ShareCodeModalContent;
