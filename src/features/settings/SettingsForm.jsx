import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import useModal from '../../contexts/useModal';

function SettingsForm({isDisabled, onToggle, isToggle}) {
  const {handleOpen} = useModal();
  const {
    control,
    handleSubmit,
    // reset,
    formState: {errors},
  } = useForm();

  // const handleReset = () => {
  //   reset({
  //     roomName: '',
  //     capacity: '',
  //     description: '',
  //   });
  // };

  const onSubmit = (data) => {
    console.log('Submitted');
    console.log(data);
  };

  // TODO: react hook form needs to be implemented
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
            name="firstName"
            control={control}
            defaultValue=""
            rules={{required: 'First name is required'}}
            render={({field}) => (
              <div className="mt-5 flex h-20 w-[17rem] flex-col gap-2">
                <label htmlFor="first-name">First Name</label>
                <TextField
                  {...field}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  id="first-name"
                  label="required"
                  variant="outlined"
                  fullWidth
                  disabled={isDisabled}
                />
              </div>
            )}
          />

          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{required: 'Last name is required'}}
            render={({field}) => (
              <div className="mt-5 flex h-20 w-[17rem] flex-col gap-2">
                <label htmlFor="last-name">Last Name</label>
                <TextField
                  {...field}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  id="last-name"
                  label="required"
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
          defaultValue=""
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({field}) => (
            <div className="flex h-20 flex-col gap-2">
              <label htmlFor="email">Your email</label>
              <TextField
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message}
                id="email"
                label="required"
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
          rules={{
            required: 'Password is required',
          }}
          render={({field}) => (
            <div className="flex h-20 flex-col gap-2">
              <label htmlFor="password">Your password</label>
              <TextField
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message}
                id="password"
                label="required"
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
            defaultValue=""
            rules={{
              required: 'Country is required',
            }}
            render={({field}) => (
              <div className="flex h-20 w-[17rem] flex-col gap-2">
                <label htmlFor="country">Country</label>
                <TextField
                  {...field}
                  error={!!errors.country}
                  helperText={errors.country?.message}
                  id="country"
                  label="required"
                  variant="outlined"
                  disabled={isDisabled}
                  fullWidth
                />
              </div>
            )}
          />

          <Controller
            name="postcode"
            control={control}
            defaultValue=""
            rules={{
              required: 'Postcode is required',
            }}
            render={({field}) => (
              <div className=" flex h-20 w-[17rem] flex-col gap-2">
                <label htmlFor="postcode">Post Code</label>
                <TextField
                  {...field}
                  error={!!errors.postcode}
                  helperText={errors.postcode?.message}
                  id="postcode"
                  label="required"
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
          defaultValue=""
          rules={{
            required: 'Position is required',
          }}
          render={({field}) => (
            <div className="mb-2 flex h-20 flex-col gap-2">
              <label htmlFor="position">Position</label>
              <TextField
                {...field}
                error={!!errors.position}
                helperText={errors.position?.message}
                id="position"
                label="required"
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
