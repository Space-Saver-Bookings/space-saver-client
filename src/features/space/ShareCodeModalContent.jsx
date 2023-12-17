import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
// import api from '../../services/api';
// import toast from 'react-hot-toast';
import {Controller, useForm} from 'react-hook-form';

function ShareCodeModalContent({heading}) {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const handleReset = () => {
    reset({
      email: '',
    });
  };

  const onSubmit = (data) => {
    console.log('Submitted');
    console.log(data);

    // TODO: when jwt is sorted
    // try {
    //   const res = await api.post(`/spaces`, data);
    //   console.log(res);
    // } catch (err) {
    //   if (err.response) {
    //     console.error('Booking error:', err.response || err);

    //     if (err.response.status === 500) {
    //       toast.error(
    //         'An error occurred on the server. Please try again later.'
    //       );
    //     } else if (err.response.status === 401) {
    //       toast.error('Unauthorised.');
    //     } else {
    //       toast.error('Failed to create space: ' + err.response.data.message);
    //     }
    //   }
    // }
  };

  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onReset={handleReset}
        className="flex w-72 flex-col items-center gap-1"
      >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'User email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({field}) => (
            <>
              <label className="text-lg" htmlFor="email">
                User Email
              </label>
              <TextField
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message}
                id="email"
                label="email"
                variant="outlined"
                fullWidth
                sx={{mb: '0.5rem'}}
              />
            </>
          )}
        />

        <div className="mb-[-1rem] mt-1">
          <Button variant="contained" type="submit">
            Share
          </Button>
        </div>
      </form>
    </>
  );
}

ShareCodeModalContent.propTypes = {
  heading: PropTypes.string,
};

export default ShareCodeModalContent;
