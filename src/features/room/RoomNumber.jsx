import PropTypes from 'prop-types';

function RoomNumber({roomNumber}) {
  return (
    <section className="flex h-full w-full items-center justify-center gap-4 font-coplette text-slate-100">
      <p className='bg-blue-600 p-4 md:text-5xl rounded-xl'>{roomNumber}</p>
    </section>
  );
}

RoomNumber.propTypes = {
  roomNumber: PropTypes.string,
};

export default RoomNumber;
