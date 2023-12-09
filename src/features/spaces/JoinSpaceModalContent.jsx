import PropTypes from 'prop-types';
import Button from '../../components/buttons/Button';

function JoinSpaceModalContent({heading}) {
  return (
    <section className="mt-[1rem] flex flex-col items-center justify-center gap-5">
      <h4 className="mb-2 mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex flex-col items-center gap-2">
        <label className="text-lg" htmlFor="">
          Enter Access Code
        </label>
        <input
          type="text"
          className="h-[2rem] w-[15rem] rounded-lg border-2 border-gray-300 outline-2 outline-slate-500"
        />
      </div>
      <Button>Join</Button>
    </section>
  );
}

JoinSpaceModalContent.propTypes = {
  heading: PropTypes.string,
};

export default JoinSpaceModalContent;
