import PropTypes from 'prop-types';

function Book({isQuickBooking}) {
  // TODO: add custom hook for fetched data with react query instead of hard coded
  // Example:
  // const {data, isLoading, error} = isQuickBooking ? useQuickBookingDetails() : useBookAgainDetails();
  // const {roomName, date, time} = data;
  const roomName = isQuickBooking ? "3401" : '1802';
  const date = isQuickBooking ? "13/8/23" : '21/11/23';
  const time = isQuickBooking && '13:20pm';

  return (
    <section className="flex h-[10rem] flex-col items-center">
      <h4 className="font-coplette text-xl text-blue-800 sm:text-2xl md:text-3xl">
        Room
      </h4>
      <p className="font-coplette text-3xl text-blue-600 sm:text-4xl md:text-6xl">
        {roomName}
      </p>
      <p className="mb-1 mt-[.2rem] text-lg text-gray-500">
        {isQuickBooking ? 'Book for' : 'Last booked on'}
      </p>
      <div className={`text-sm ${isQuickBooking ? 'flex gap-1' : ''}`}>
        <p className="rounded-full bg-blue-600 px-4 py-2 text-slate-100">
          {date}
        </p>
        {isQuickBooking && (
          <p className="rounded-full bg-blue-600 px-4 py-2 text-slate-100">
            {time}
          </p>
        )}
      </div>
    </section>
  );
}

Book.propTypes = {
  isQuickBooking: PropTypes.bool,
};

export default Book;
