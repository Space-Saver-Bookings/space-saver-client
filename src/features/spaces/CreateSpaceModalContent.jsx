import PropTypes from 'prop-types';
// import Button from '../../components/buttons/Button';
import {Button, TextField} from '@mui/material';

// TODO: Fix height issue, the same with join space modal
function CreateSpaceModalContent({heading}) {
  return (
    <>
      <h4 className="mb-2 mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex w-full flex-col items-center gap-1 px-8">
        <label className="self-start text-lg" htmlFor="">
          Space Name
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="required"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
        {/* TODO: confirm is server generates access code */}
        {/* <label className="self-start text-lg" htmlFor="">
          Access Code
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
        /> */}
        <label className="self-start text-lg" htmlFor="">
          Capacity
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="required"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
        <label className="self-start text-lg" htmlFor="">
          Description
        </label>
        <TextField
          required
          id="outlined-basic"
          label="required"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
          multiline
          maxRows={6}
        />
      </div>
      {/* <div className='flex grow'></div> */}
      <div className="mb-[-1rem] ml-auto mr-5 flex gap-4">
        <Button variant="contained" color="error">
          Cancel
        </Button>
        {/* TODO: change this to process and submit */}
        {/* TODO: either they get redirected to their new space or a modal pop ups displaying the access code */}
        <Button variant="contained">Create New Space</Button>
      </div>
    </>
  );
}

CreateSpaceModalContent.propTypes = {
  heading: PropTypes.string,
};

export default CreateSpaceModalContent;
