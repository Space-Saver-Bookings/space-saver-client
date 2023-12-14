import PropTypes from 'prop-types';
import {TextField} from '@mui/material';

function SettingsForm({isDisabled}) {
  // TODO: react hook form needs to be implemented
  return (
    <section className="flex h-[40rem] w-[40rem] flex-col rounded-lg border-2 bg-white p-8 gap-5">
      <h3 className='self-center font-coplette text-4xl'>Account</h3>
      <div className="flex justify-between">
        <div className=" mt-5 flex h-20 w-[17rem] flex-col gap-2">
          <label htmlFor="">First Name</label>
          <TextField
            required
            // defaultValue="Space Name"
            id="outlined-basic"
            label="required"
            variant="outlined"
            fullWidth
            disabled={isDisabled}
          />
        </div>

        <div className=" mt-5 flex h-20 w-[17rem] flex-col gap-2">
          <label htmlFor="">Last Name</label>
          <TextField
            required
            // defaultValue="Space Name"
            id="outlined-basic"
            label="required"
            variant="outlined"
            disabled={isDisabled}
            fullWidth
          />
        </div>
      </div>

      <div className=" flex h-20 flex-col gap-2">
        <label htmlFor="">Your email</label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="required"
          variant="outlined"
          disabled={isDisabled}
          fullWidth
          sx={{mb: '0.5rem'}}
        />
      </div>

      <div className=" flex h-20 flex-col gap-2">
        <label htmlFor="">Your password</label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="required"
          variant="outlined"
          disabled={isDisabled}
          fullWidth
          sx={{mb: '0.5rem'}}
        />
      </div>

      <div className="flex justify-between">
        <div className=" flex h-20 w-[17rem] flex-col gap-2">
          <label htmlFor="">Country</label>
          <TextField
            required
            // defaultValue="Space Name"
            id="outlined-basic"
            label="required"
            variant="outlined"
            disabled={isDisabled}
            fullWidth
          />
        </div>

        <div className=" flex h-20 w-[17rem] flex-col gap-2">
          <label htmlFor="">Post Code</label>
          <TextField
            required
            // defaultValue="Space Name"
            id="outlined-basic"
            label="required"
            variant="outlined"
            disabled={isDisabled}
            fullWidth
          />
        </div>
      </div>

      <div className="mb-2 flex h-20 flex-col gap-2">
        <label htmlFor="">Position</label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="required"
          variant="outlined"
          disabled={isDisabled}
          fullWidth
          sx={{mb: '0.5rem'}}
        />
      </div>
    </section>
  );
}

SettingsForm.propTypes = {
  isDisabled: PropTypes.bool,
};

export default SettingsForm;
