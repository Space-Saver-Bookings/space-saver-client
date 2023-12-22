import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {joinSpace} from '../../services/apiSpaces';
import useModal from '../../contexts/useModal';
// import toast from 'react-hot-toast';
// import api from '../../services/api';

function JoinSpaceModalContent({heading}) {
  const {handleClose} = useModal();
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const handleReset = () => {
    reset({
      code: '',
    });
  };

  const onSubmit = async (data) => {
    try {
      await joinSpace(data.code);
      handleClose();
      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onReset={handleReset}
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
