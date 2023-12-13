import PropTypes from 'prop-types';
import {TextField} from '@mui/material';

function SettingsForm({disabled}) {
  return (
    <section className="flex h-[40rem] w-[40rem] flex-col items-center justify-between rounded-lg border-2 bg-white p-8">
      <div className="flex w-72 flex-col items-center gap-2">
        <label className="self-start text-lg" htmlFor="">
          First Name
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          disabled={disabled}
          id="outlined-basic"
          label="required"
          variant="outlined"
          size="small"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
        <label className="self-start text-lg" htmlFor="">
          Last Name
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          disabled={disabled}
          id="outlined-basic"
          label="required"
          variant="outlined"
          size="small"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
        <label className="self-start text-lg" htmlFor="">
          Email
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          disabled={disabled}
          id="outlined-basic"
          label="required"
          variant="outlined"
          size="small"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
        <label className="self-start text-lg" htmlFor="">
          Password
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          disabled={disabled}
          id="outlined-basic"
          label="required"
          variant="outlined"
          size="small"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
        <label className="self-start text-lg" htmlFor="">
          Country
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          disabled={disabled}
          id="outlined-basic"
          label="required"
          variant="outlined"
          size="small"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
        <label className="self-start text-lg" htmlFor="">
          Postcode
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          disabled={disabled}
          id="outlined-basic"
          label="required"
          variant="outlined"
          size="small"
          fullWidth
          sx={{mb: '0.5rem'}}
        />
      </div>
    </section>
  );
}

SettingsForm.propTypes = {
  disabled: PropTypes.bool,
};

export default SettingsForm;
