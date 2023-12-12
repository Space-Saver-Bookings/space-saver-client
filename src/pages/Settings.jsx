import {Button} from '@mui/material';
import SettingsForm from '../features/settings/SettingsForm';
import {useState} from 'react';

function Settings() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  return (
    <section className="flex h-full flex-col items-center justify-center gap-8">
      <SettingsForm disabled={!toggle} />

      {toggle ? (
        <div className='flex gap-8'>
          <Button variant="contained" color="error">
            Delete Account
          </Button>
          <Button variant='outlined' color='error' onClick={handleToggle}>
            Cancel
          </Button>
          <Button variant='contained' onClick={handleToggle}>
            Confirm
          </Button>
        </div>
      ) : (
        <Button variant="contained" onClick={handleToggle}>
          Edit
        </Button>
      )}
    </section>
  );
}

export default Settings;
