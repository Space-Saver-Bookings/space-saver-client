import PropTypes from 'prop-types';
import Button from '../buttons/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

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

function ModalBox({heading}) {
  return (
    <div className="absolute left-[50%] top-[50%] h-[14rem] w-[27rem] translate-x-[-50%] translate-y-[-50%]  rounded-lg border-2 bg-slate-100 p-2">
      <div className="flex flex-col items-center justify-center gap-5 mt-[1rem]">
        <h4 className="font-coplette text-3xl mt-[-.6rem] mb-2">{heading}</h4>
        <div className="flex flex-col items-center gap-2">
          <label className="text-lg" htmlFor="">
            Enter Access Code
          </label>
          <input type="text" className="w-[15rem] h-[2rem] rounded-lg border-2 border-gray-300 outline-slate-500 outline-2" />
        </div>
        <Button>Join</Button>
      </div>

      <button>
        <CloseRoundedIcon
          className="absolute right-1 top-1"
          sx={{fontSize: 30}}
          color='action'
        />
      </button>
    </div>
  );
}

ModalBox.propTypes = {
  heading: PropTypes.string,
};

export default ModalBox;
