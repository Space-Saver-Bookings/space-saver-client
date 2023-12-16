import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import useModal from '../../contexts/useModal';

function EditCapacityModalContent({heading}) {
  const {handleClose} = useModal();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const handleReset = () => {
    reset({
      capacity: '',
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
        className="flex w-64 flex-col items-center justify-center gap-8"
      >
        {/* <div className="flex flex-col gap-1">
          <label className="text-lg" htmlFor="">
            Rooms
          </label>
          <TextField
            required
            // defaultValue="Space Name"
            id="outlined-basic"
            label="amount"
            variant="outlined"
            fullWidth
            // sx={{mb: '0.5rem'}}
          />
        </div> */}

        <Controller
          name="capacity"
          control={control}
          defaultValue=""
          rules={{
            required: 'Capacity is required',
          }}
          render={({field}) => (
            <div className="flex flex-col gap-1">
              <label className="text-lg" htmlFor="capacity">
                People
              </label>
              <TextField
                {...field}
                error={!!errors.capacity}
                helperText={errors.capacity?.message}
                id="capacity"
                label="amount"
                variant="outlined"
                fullWidth
              />
            </div>
          )}
        />

        <div className="mx-auto mb-[-1rem] flex gap-4 pl-2">
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Confirm
          </Button>
        </div>
      </form>
    </>
  );
}

EditCapacityModalContent.propTypes = {
  heading: PropTypes.string,
};

export default EditCapacityModalContent;
