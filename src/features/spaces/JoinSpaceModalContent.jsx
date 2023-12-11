import PropTypes from 'prop-types';
// import Button from '../../components/buttons/Button';
import { Button, TextField } from '@mui/material';

function JoinSpaceModalContent({heading}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex flex-col items-center gap-2">
        {/* <input
          type="text"
          className="h-[2rem] w-[15rem] rounded-lg border-2 border-gray-300 outline-2 outline-slate-500"
        /> */}
        <label className="text-lg" htmlFor="">
          Enter Access Code
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

      <Button variant='contained'>Join</Button>
    </>
  );
}

JoinSpaceModalContent.propTypes = {
  heading: PropTypes.string,
};

export default JoinSpaceModalContent;
