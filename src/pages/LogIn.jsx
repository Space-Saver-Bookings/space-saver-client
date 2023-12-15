import {Button, TextField} from '@mui/material';
import {Link} from 'react-router-dom';
import LogoDesktop from '../components/LogoDesktop';
import {Controller, useForm} from 'react-hook-form';
import api from '../services/axios';
// import useAuth from '../contexts/useAuth';

function LogIn() {
  // const {login} = useAuth();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data) => {
    console.log('Submitted');
    // console.log(typeof data);
    try {
      const res = await api.post('/users/login', data);
      console.log(res);
      const jwt = res.data;
      console.log(jwt);
    } catch (err) {
      console.error('Login error:', err.response || err);
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
