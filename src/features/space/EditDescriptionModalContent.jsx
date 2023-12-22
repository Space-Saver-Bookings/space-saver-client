import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {updateSpace} from '../../services/apiSpaces';
import {useParams} from 'react-router-dom';
import useModal from '../../contexts/useModal';

function EditDescriptionModalContent({heading}) {
  const {spaceId} = useParams();
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
