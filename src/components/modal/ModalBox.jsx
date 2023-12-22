import PropTypes from 'prop-types';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import useModal from '../../contexts/useModal';

function ModalBox({content, width, height}) {
  const {handleClose} = useModal();

  return (
    <div
      className={`absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ${width} ${height} rounded-lg border-2 bg-slate-100 p-2 overflow-y-auto`}
    >
      <section className="mt-[1rem] flex flex-col items-center justify-center gap-5 px-14">
        {content}
      </section>
      <button onClick={handleClose}>
        <CloseRoundedIcon
          className="absolute right-1 top-1 hover:bg-slate-200 transition-all rounded-full"
          sx={{fontSize: 30}}
          color="action"
        />
      </button>
    </div>
  );
}

ModalBox.propTypes = {
  content: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ModalBox;
