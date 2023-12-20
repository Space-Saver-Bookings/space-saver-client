import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
import {Controller, useForm, useWatch} from 'react-hook-form';
import useModal from '../../contexts/useModal';
import useAuth from '../../auth/useAuth';
import {updateUser} from '../../services/apiUsers';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
// import {updateUser} from '../../services/apiUsers';
function SettingsForm({isDisabled, onToggle, isToggle}) {
  const {user, logout} = useAuth();
  const {handleOpen} = useModal();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      password: '',
      country: user?.country,
      post_code: user?.post_code,
      position: user?.position,
    },
  });

  const navigate = useNavigate();

  // console.log(user);

  // const handleReset = () => {
  //   reset({
  //     roomName: '',
  //     capacity: '',
  //     description: '',
  //   });
  // };

  // Watch all fields
  const values = useWatch({control});

  const onSubmit = async () => {
    const updatedData = Object.keys(values).reduce((acc, key) => {
      // Include field in updatedData if it's different from the default value
      if (values[key] !== control._defaultValues[key]) {
        acc[key] = values[key];
      }
      return acc;
    }, {});

    console.log('Updated Fields:', updatedData);

    try {
      await updateUser(user._id, updatedData);

      if (updatedData.email || updatedData.password) {
        logout();
        navigate('/login');
        toast.success('Please log in with your new credentials.');
      } else {
        toast.success('User details updated.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="flex h-[45rem] w-[40rem] flex-col gap-2 rounded-lg border-2 bg-white p-8">
      <h3 className="self-center font-coplette text-4xl">Account</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // onReset={handleReset}
        className="flex flex-col gap-8"
      >
        <div className="flex justify-between">
          <Controller
            name="first_name"
            control={control}
            defaultValue={user?.first_name}
            render={({field}) => (
              <div className="mt-5 flex h-20 w-[17rem] flex-col gap-2">
                <label htmlFor="first-name">First Name</label>
                <TextField
                  {...field}
                  error={!!errors.first_name}
                  helperText={errors.first_name?.message}
                  id="first-name"
                  variant="outlined"
                  fullWidth
                  disabled={isDisabled}
                />
              </div>
            )}
          />

          <Controller
            name="last_name"
            control={control}
            defaultValue={user?.last_name}
            render={({field}) => (
              <div className="mt-5 flex h-20 w-[17rem] flex-col gap-2">
                <label htmlFor="last-name">Last Name</label>
                <TextField
                  {...field}
                  error={!!errors.last_name}
                  helperText={errors.last_name?.message}
                  id="last-name"
                  variant="outlined"
                  disabled={isDisabled}
                  fullWidth
                />
              </div>
            )}
          />
        </div>

        <Controller
          name="email"
          control={control}
          defaultValue={user?.email}
          render={({field}) => (
            <div className="flex h-20 flex-col gap-2">
              <label htmlFor="email">Your email</label>
              <TextField
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message}
                id="email"
                variant="outlined"
                disabled={isDisabled}
                fullWidth
                sx={{mb: '0.5rem'}}
              />
            </div>
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({field}) => (
            <div className="flex h-20 flex-col gap-2">
              <label htmlFor="password">Your new password</label>
              <TextField
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message}
                id="password"
                placeholder="some new password"
                variant="outlined"
                disabled={isDisabled}
                fullWidth
                sx={{mb: '0.5rem'}}
              />
            </div>
          )}
        />

        <div className="flex justify-between">
          <Controller
            name="country"
            control={control}
            defaultValue={user?.country}
            render={({field}) => (
              <div className="flex h-20 w-[17rem] flex-col gap-2">
                <label htmlFor="country">Country</label>
                <TextField
                  {...field}
                  error={!!errors.country}
                  helperText={errors.country?.message}
                  id="country"
                  variant="outlined"
                  disabled={isDisabled}
                  fullWidth
                />
              </div>
            )}
          />

          <Controller
            name="post_code"
            control={control}
            defaultValue={user?.post_code}
            render={({field}) => (
              <div className=" flex h-20 w-[17rem] flex-col gap-2">
                <label htmlFor="postcode">Post Code</label>
                <TextField
                  {...field}
                  error={!!errors.post_code}
                  helperText={errors.post_code?.message}
                  id="postcode"
                  variant="outlined"
                  disabled={isDisabled}
                  fullWidth
                />
              </div>
            )}
          />
        </div>

        <Controller
          name="position"
          control={control}
          defaultValue={user?.position}
          render={({field}) => (
            <div className="mb-2 flex h-20 flex-col gap-2">
              <label htmlFor="position">Position</label>
              <TextField
                {...field}
                error={!!errors.position}
                helperText={errors.position?.message}
                id="position"
                variant="outlined"
                disabled={isDisabled}
                fullWidth
                sx={{mb: '0.5rem'}}
              />
            </div>
          )}
        />

        {isToggle ? (
          <div className="flex gap-8 self-center">
            <Button variant="contained" color="error" onClick={handleOpen}>
              Delete Account
            </Button>
            <Button variant="outlined" color="error" onClick={onToggle}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Confirm
            </Button>
          </div>
        ) : (
          <Button
            variant="contained"
            className="w-20 self-center"
            onClick={onToggle}
          >
            Edit
          </Button>
        )}
      </form>
    </section>
  );
}

SettingsForm.propTypes = {
  isDisabled: PropTypes.bool,
  onToggle: PropTypes.func,
  isToggle: PropTypes.bool,
};

export default SettingsForm;
