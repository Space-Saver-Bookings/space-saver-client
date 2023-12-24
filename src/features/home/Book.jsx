import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Book({isQuickBooking, ...props}) {
  const {bookAgainName, bookAgainDate} = props;
  const roomName = isQuickBooking ? '3401' : bookAgainName;
  const date = isQuickBooking ? '13/8/23' : bookAgainDate;
  const time = isQuickBooking && '13:20pm';

  return (
    <Link to="/bookings">
      <section className="flex h-[10rem] justify-center items-center w-full gap-20">
        <div className='flex flex-col items-center'>
          <h4 className="font-coplette text-xl text-blue-800 sm:text-2xl md:text-3xl">
            Room
          </h4>
          <p className="font-coplette text-xl text-blue-600 sm:text-2xl md:text-3xl">
            {roomName}
          </p>
        </div>
        <div className='flex flex-col items-center'>
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
        </div>
      </section>
    </Link>
  );
}

Book.propTypes = {
  isQuickBooking: PropTypes.bool,
  bookAgainName: PropTypes.any,
  bookAgainDate: PropTypes.any,
};

export default Book;
