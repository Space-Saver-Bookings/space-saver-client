import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import api from '../../services/api';

function JoinSpaceModalContent({heading}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data) => {
    console.log('Submitted');
    console.log(data);

    try {
      const res = await api.post(`/spaces/code/${data.code}`);
      console.log(res);
    } catch (err) {
      if (err.response) {
        console.error('Booking error:', err.response || err);

        if (err.response.status === 500) {
          toast.error(
            'An error occurred on the server. Please try again later.'
          );
        } else if (err.response.status === 401) {
          toast.error('Unauthorised.');
        } else {
          toast.error('Failed to join space: ' + err.response.data.message);
        }
      }
    }
  };

  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[17rem] flex-col items-center gap-2"
      >
        <Controller
          name="code"
          control={control}
          defaultValue=""
          rules={{required: 'Access code is required'}}
          render={({field}) => (
            <>
              <label className="text-lg" htmlFor="code">
                Enter Access Code
              </label>
              <TextField
                {...field}
                error={!!errors.code}
                helperText={errors.code?.message}
                id="code"
                label="access code"
                variant="outlined"
                fullWidth
                sx={{mb: '.6rem'}}
              />
            </>
          )}
        />
        <div className="mb-[-1rem]">
          <Button variant="contained" type="submit">
            Join
          </Button>
        </div>
      </form>
    </>
  );
}

JoinSpaceModalContent.propTypes = {
  heading: PropTypes.string,
};

export default JoinSpaceModalContent;
