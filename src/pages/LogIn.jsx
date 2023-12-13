import {Button, TextField} from '@mui/material';
import {Link} from 'react-router-dom';
import LogoDesktop from '../components/LogoDesktop';

function LogIn() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-6 bg-slate-100">
      <div className="flex h-[.1rem] w-[23rem] flex-col justify-center">
        <LogoDesktop NoDivider />
      </div>

      <section className="flex h-auto w-[40rem] flex-col gap-3 rounded-xl border-2 bg-white px-9 py-10 shadow-xl">
        <h2 className="font-coplette text-4xl">Sign in to your account</h2>
        <p className="text-[1.05rem] text-gray-700">
          To access the awesome features SpaceSaver has to offer, join now to
          start managing spaces.
        </p>

        <div className="mb-5 mt-5 flex h-20 flex-col gap-2">
          <label htmlFor="">Your email</label>
          <TextField
            required
            // defaultValue="Space Name"
            id="outlined-basic"
            label="required"
            variant="outlined"
            //   size="small"
            fullWidth
            sx={{mb: '0.5rem'}}
          />
        </div>
        <div className="mb-6 flex h-20 flex-col gap-2">
          <label htmlFor="">Your password</label>
          <TextField
            required
            // defaultValue="Space Name"
            id="outlined-basic"
            label="required"
            variant="outlined"
            //   size="small"
            fullWidth
            sx={{mb: '0.5rem'}}
          />
        </div>

        <div className="mb-4">
          <Button variant="contained" size='large'>Sign in to account</Button>
        </div>

        <div>
          <p className="text-gray-700">
            Not registered?{' '}
            <span className="text-blue-700 hover:underline">
              <Link to="/register">Create an account.</Link>
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default LogIn;
