import {Button, TextField} from '@mui/material';
import {Link} from 'react-router-dom';
import LogoDesktop from '../components/LogoDesktop';

function Register() {
  return (
    // TODO: Finish off responsive for mobile and tablet views
    <main className="flex h-[63rem] flex-col items-center justify-center gap-6 bg-slate-100">
      <div className="flex h-[.1rem] w-[23rem] flex-col justify-center">
        <LogoDesktop NoDivider />
      </div>

      <section className="flex h-auto md:w-[40rem] w-[28rem] flex-col gap-3 rounded-xl border-2 bg-white px-9 py-10 shadow-xl">
        <h2 className="font-coplette text-4xl">Create an account</h2>
        <p className="text-[1.05rem] text-gray-700">
          To access the awesome features SpaceSaver has to offer, login to start
          managing spaces or book rooms to streamline your workday.
        </p>

        <div className="flex justify-between">
          <div className=" mt-5 flex h-20 w-[17rem] flex-col gap-2">
            <label htmlFor="">First Name</label>
            <TextField
              required
              // defaultValue="Space Name"
              id="outlined-basic"
              label="required"
              variant="outlined"
              size="small"
              fullWidth
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
              size="small"
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
            size="small"
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
            size="small"
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
              size="small"
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
              size="small"
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
            size="small"
            fullWidth
            sx={{mb: '0.5rem'}}
          />
        </div>

        <div className="mb-3">
          {/* TODO: Add logic for hitting register endpoint */}
          <Button variant="contained" size="large">
            Create account
          </Button>
        </div>

        <div>
          <p className="text-gray-700">
            Already have an account?{' '}
            <span className="text-blue-700 hover:underline">
              <Link to="/login">Login here.</Link>
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Register;
