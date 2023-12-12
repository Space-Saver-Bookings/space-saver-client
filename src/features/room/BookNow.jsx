import PropTypes from 'prop-types';

function BookNow({date, time}) {
  return (
    <section className="flex h-full w-full items-center justify-center p-2 gap-6">
      <p className="font-coplette text-4xl text-blue-700 w-44">Next Available</p>
      <div className="flex flex-col items-center gap-3 rounded-xl bg-blue-600 p-3 font-coplette text-slate-100">
        <p className="text-3xl sm:text-4xl md:text-5xl">{date}</p>
        <p className="text-lg sm:text-xl md:text-2xl">{time}</p>
      </div>
    </section>
  );
}

BookNow.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
};

export default BookNow;
