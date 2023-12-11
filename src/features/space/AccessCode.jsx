import PropTypes from 'prop-types';

function AccessCode({accessCode}) {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center">
      <p className="rounded-xl bg-blue-600 p-3 font-coplette text-3xl text-slate-100 sm:text-4xl md:text-6xl">
        {accessCode}
      </p>
    </section>
  );
}

AccessCode.propTypes = {
  accessCode: PropTypes.number,
};

export default AccessCode;
