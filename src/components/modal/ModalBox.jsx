import PropTypes from 'prop-types';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import useModal from '../../contexts/useModal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

function ModalBox({content}) {
  const {handleClose} = useModal();

  return (
    <div className="absolute left-[50%] top-[50%] h-[14rem] w-[27rem] translate-x-[-50%] translate-y-[-50%]  rounded-lg border-2 bg-slate-100 p-2">
      {content}
      <button onClick={handleClose}>
        <CloseRoundedIcon
          className="absolute right-1 top-1"
          sx={{fontSize: 30}}
          color="action"
        />
      </button>
    </div>
  );
}

ModalBox.propTypes = {
  content: PropTypes.element,
};

export default ModalBox;
