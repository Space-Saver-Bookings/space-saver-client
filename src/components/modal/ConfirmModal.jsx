import PropTypes from 'prop-types';
import {Button} from '@mui/material';

function ConfirmModal({heading, handleNo, handleYes}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>

      <div className='flex gap-6 mt-2 mb-[-1rem]'>
        <Button variant="contained" color="error" onClick={handleNo}>
          No
        </Button>
        <Button variant="contained" onClick={handleYes}>Yes</Button>
      </div>
    </>
  );
}

ConfirmModal.propTypes = {
  heading: PropTypes.string,
  handleNo: PropTypes.func,
  handleYes: PropTypes.func
};

export default ConfirmModal;
