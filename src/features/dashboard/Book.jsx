import PropTypes from 'prop-types';

function Book({roomNumber, date, time, isBookFor}) {
  return (
    <section className="flex h-[10rem] flex-col items-center mt-[-.4rem]">
      <h4 className="font-coplette text-xl text-blue-800 sm:text-2xl md:text-3xl">
        Room
      </h4>
      <p className="font-coplette text-blue-600 text-3xl sm:text-4xl md:text-6xl">
        {roomNumber}
      </p>
      <p className="mb-1 mt-[.2rem] text-lg text-gray-500">
        {isBookFor ? 'Book for' : 'Last booked on'}
      </p>
      <div className={`text-sm ${isBookFor ? 'flex gap-1' : ''}`}>
        <p className="rounded-full bg-blue-600 px-4 py-2 text-slate-100">
          {date}
        </p>
        {isBookFor && (
          <p className="rounded-full bg-blue-600 px-4 py-2 text-slate-100">
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
