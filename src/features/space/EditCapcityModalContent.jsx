import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import useModal from '../../contexts/useModal';
import {updateSpace} from '../../services/apiSpaces';
import {useParams} from 'react-router-dom';

function EditCapacityModalContent({heading}) {
  const {handleClose} = useModal();
  const {spaceId} = useParams();
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

  const onSubmit = async (data) => {
    await updateSpace(data, spaceId);
    handleClose();
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onReset={handleReset}
        className="flex w-64 flex-col items-center justify-center gap-8"
      >
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
