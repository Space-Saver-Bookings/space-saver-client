import PropTypes from 'prop-types';
import {Button} from '@mui/material';
import useModal from '../../contexts/useModal';

function ConfirmModal({heading, handleYes}) {
  const {handleClose} = useModal();
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <p>This action cannot be undone.</p>

      <div className="mb-[-1rem] mt-2 flex gap-6">
        <Button variant="contained" color="error" onClick={handleClose}>
          No
        </Button>
        <Button variant="contained" onClick={handleYes}>
          Yes
        </Button>
      </div>
    </>
  );
}

ConfirmModal.propTypes = {
  heading: PropTypes.string,
  handleYes: PropTypes.func,
};

export default ConfirmModal;
