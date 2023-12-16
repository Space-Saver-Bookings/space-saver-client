import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
import useModal from '../../contexts/useModal';
import api from '../../services/api';
import toast from 'react-hot-toast';
import {Controller, useForm} from 'react-hook-form';

function CreateSpaceModalContent({heading}) {
  const {handleClose} = useModal();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const handleReset = () => {
    reset({
      spaceName: '',
      capacity: '',
      description: '',
    });
  };

  const onSubmit = async (data) => {
    console.log('Submitted');
    console.log(data);

    // console.log('default headers:', api.defaults.headers);

    // TODO: when jwt is sorted
    try {
      const res = await api.post(`/spaces`, data);
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
          toast.error('Failed to create space: ' + err.response.data.message);
        }
      }
    }
  };

  return (
    <>
      <h4 className="mb-2 mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onReset={handleReset}
        className="flex w-[28rem] flex-col items-center gap-1 px-8"
      >
        <Controller
          name="spaceName"
          control={control}
          defaultValue=""
          rules={{required: 'Space name is required'}}
          render={({field}) => (
            <>
              <label className="self-start text-lg" htmlFor="space-name">
                Space Name
              </label>
              <TextField
                {...field}
                error={!!errors.spaceName}
                helperText={errors.spaceName?.message}
                id="space-name"
                label="required"
                variant="outlined"
                fullWidth
                sx={{mb: '0.5rem'}}
              />
            </>
          )}
        />

        {/* TODO: confirm is server generates access code */}
        {/* <label className="self-start text-lg" htmlFor="">
          Access Code
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="required"
          variant="outlined"
          size="small"
          fullWidth
          sx={{mb: '0.5rem'}}
        /> */}

        <Controller
          name="capacity"
          control={control}
          defaultValue=""
          rules={{required: 'Capacity is required'}}
          render={({field}) => (
            <>
              <label className="self-start text-lg" htmlFor="capacity">
                Capacity
              </label>
              <TextField
                {...field}
                error={!!errors.capacity}
                helperText={errors.capacity?.message}
                id="capacity"
                label="required"
                variant="outlined"
                fullWidth
                sx={{mb: '0.5rem'}}
              />
            </>
          )}
        />

        <Controller
          name="description"
          control={control}
          defaultValue=""
          rules={{required: 'Description is required'}}
          render={({field}) => (
            <>
              <label className="self-start text-lg" htmlFor="description">
                Description
              </label>
              <TextField
                {...field}
                error={!!errors.description}
                helperText={errors.description?.message}
                id="description"
                label="required"
                variant="outlined"
                fullWidth
                sx={{mb: '0.5rem'}}
                multiline
                maxRows={6}
              />
            </>
          )}
        />
        <div className="mb-[-1rem] ml-auto mr-5 mt-3 flex w-[19rem] gap-4">
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          {/* TODO: either they get redirected to their new space or a modal pop ups displaying the access code */}
          <Button variant="contained" type="submit">
            Create New Space
          </Button>
        </div>
      </form>
    </>
  );
}

CreateSpaceModalContent.propTypes = {
  heading: PropTypes.string,
};

export default CreateSpaceModalContent;
