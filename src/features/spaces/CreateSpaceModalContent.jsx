import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
import useModal from '../../contexts/useModal';
import {Controller, useForm} from 'react-hook-form';
import {createSpace} from '../../services/apiSpaces';

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
    // console.log(data);

    await createSpace(data);
    handleClose();
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
          name="name"
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
                error={!!errors.name}
                helperText={errors.name?.message}
                id="space-name"
                placeholder="Office Space"
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
                placeholder="25"
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
          rules={{
            required: 'Description is required',
            valueAsNumber: true,
            min: {value: 1, message: 'Capacity must be at least 1'},
          }}
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
                placeholder="Office space located on level 11."
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
