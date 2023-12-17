import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';

function EditDescriptionModalContent({heading}) {
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
        className="flex w-96 flex-col items-center gap-1"
      >
        <Controller
          name="description"
          control={control}
          defaultValue=""
          rules={{
            required: 'Description is required',
          }}
          render={({field}) => (
            <>
              <label className="text-lg" htmlFor="description">
                Description
              </label>
              <TextField
                {...field}
                error={!!errors.description}
                helperText={errors.description?.message}
                id="description"
                label="description"
                variant="outlined"
                fullWidth
                multiline
                maxRows={8}
                sx={{mb: '0.5rem'}}
              />
            </>
          )}
        />

        <div className="mb-[-1rem]">
          <Button variant="contained" type="submit">
            Confirm
          </Button>
        </div>
      </form>
    </>
  );
}

EditDescriptionModalContent.propTypes = {
  heading: PropTypes.string,
};

export default EditDescriptionModalContent;
