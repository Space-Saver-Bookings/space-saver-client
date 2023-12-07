import PropTypes from 'prop-types';

function Book({roomNumber, date, time, isBookFor}) {
  return (
    <section className="flex h-[10rem] flex-col items-center">
      <h4 className="font-coplette text-4xl text-blue-800">Room</h4>
      <p className="font-coplette text-7xl text-blue-600">{roomNumber}</p>
      <p className='mt-[1rem] text-slate-400'>Last booked on</p>
      <div>
        <p>{date}</p>
        {isBookFor && <p>{time}</p>}
      </div>
    </section>
  );
}

Book.propTypes = {
  roomNumber: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  isBookFor: PropTypes.bool,
};

export default Book;
