import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';

function ShareCodeModalContent({heading}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex flex-col items-center gap-2 w-72">
        <label className="text-lg" htmlFor="">
          User Email
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="email"
          variant="outlined"
          size="small"
          fullWidth
          // sx={{mb: '0.5rem'}}
        />
      </div>

      <Button variant="contained">Share</Button>
    </>
  );
}

ShareCodeModalContent.propTypes = {
  heading: PropTypes.string,
};

export default ShareCodeModalContent;
