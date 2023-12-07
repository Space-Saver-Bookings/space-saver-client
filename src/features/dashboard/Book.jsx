import PropTypes from 'prop-types';

function Book({roomNumber, date, time, isBookFor}) {
  return (
    <section className="flex h-[10rem] flex-col items-center">
      <h4 className="font-coplette text-4xl text-blue-800">Room</h4>
      <p className="font-coplette text-7xl text-blue-600">{roomNumber}</p>
      <p className="mb-1 mt-[.5rem] text-slate-600">
        {isBookFor ? 'Book for' : 'Last booked on'}
      </p>
      <div className={`${isBookFor ? 'flex gap-1' : ''}`}>
        <p className="rounded-full bg-blue-600 px-4 py-1 text-slate-100">
          {date}
        </p>
        {isBookFor && (
          <p className="rounded-full bg-blue-600 px-4 py-1 text-slate-100">
            {time}
          </p>
        )}
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
