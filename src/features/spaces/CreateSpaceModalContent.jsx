import PropTypes from 'prop-types';
import Button from '../../components/buttons/Button';
import {TextField} from '@mui/material';

function CreateSpaceModalContent({heading}) {
  return (
    <>
      <h4 className="mb-2 mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex flex-col items-center gap-1 w-72">
        <label className="self-start text-lg" htmlFor="">
          Space Name
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
        />
        <label className="self-start text-lg" htmlFor="">
          Capacity
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
          Details
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
          maxRows={6}
        />
      </div>
      {/* <div className='flex grow'></div> */}
      <div className='ml-auto flex gap-4 mr-5'>
        <Button>Cancel</Button>
        <Button>Create New Space</Button>
      </div>
    </>
  );
}

CreateSpaceModalContent.propTypes = {
  heading: PropTypes.string,
};

export default CreateSpaceModalContent;
