import {Button, TextField} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import LogoDesktop from '../components/LogoDesktop';
import {Controller, useForm} from 'react-hook-form';
import api from '../services/api';
import useAuth from '../auth/useAuth';
import toast from 'react-hot-toast';

function LogIn() {
  const {login} = useAuth();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data) => {
    console.log('Submitted');
    // console.log(typeof data);
    try {
      const {
        data: {jwt},
      } = await api.post('/users/login', data);
      console.log('Login successful');
      console.log(jwt);
      login(jwt);
      console.log('default headers:', api.defaults.headers);
      navigate('/');
    } catch (err) {
      if (err.response) {
        console.error('Login error:', err.response || err);

        if (err.response.status === 500) {
          toast.error(
            'An error occurred on the server. Please try again later.'
          );
        } else if (err.response.status === 409) {
          toast.error('The email address you entered is already registered.');
        } else {
          toast.error('Failed to login: ' + err.response.data.message);
        }
      }
    }
  };

  return (
    // TODO: Finish off responsive for mobile and tablet views
    <main className="flex h-screen flex-col items-center justify-center gap-6 bg-slate-100">
      <div className="flex h-[.1rem] w-[23rem] flex-col justify-center">
        <LogoDesktop NoDivider />
      </div>

      <section className="flex h-auto w-[40rem] flex-col gap-3 rounded-xl border-2 bg-white px-9 py-10 shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-3 font-coplette text-4xl">
            Sign in to your account
          </h2>
          <p className="text-[1.05rem] text-gray-700">
            To access the awesome features SpaceSaver has to offer, login to
            start managing spaces or book rooms to streamline your workday.
          </p>

          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({field}) => (
              <div className="mb-6 mt-5 flex h-20 flex-col gap-2">
                <label htmlFor="email">Your email</label>
                <TextField
                  {...field}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  // required
                  id="email"
                  label="email"
                  variant="outlined"
                  fullWidth
                />
              </div>
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{required: 'Password is required'}}
            render={({field}) => (
              <div className="mb-8 flex h-20 flex-col gap-2">
                <label htmlFor="password">Your password</label>
                {/* TODO: update password field to hide */}
                <TextField
                  {...field}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  // required
                  id="password"
                  label="password"
                  variant="outlined"
                  fullWidth
                />
              </div>
            )}
          />

          <div className="mb-4">
            {/* TODO: Add logic for hitting login endpoint */}
            <Button variant="contained" size="large" type="submit">
              Sign in to account
            </Button>
          </div>
        </form>

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
