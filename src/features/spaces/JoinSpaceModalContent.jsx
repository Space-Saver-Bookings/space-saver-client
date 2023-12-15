import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';

function JoinSpaceModalContent({heading}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex w-[15rem] flex-col items-center gap-2">
        <label className="text-lg" htmlFor="">
          Enter Access Code
        </label>
        <TextField
          // required
          id="outlined-basic"
          label="access code"
          variant="outlined"
          size="small"
          fullWidth
        />
      </div>

      <div className="mb-[-1rem]">
        {/* TODO: change this to process and submit */}
        <Button variant="contained">Join</Button>
      </div>
    </>
  );
}

JoinSpaceModalContent.propTypes = {
  heading: PropTypes.string,
};

export default JoinSpaceModalContent;
