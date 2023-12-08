import PropTypes from 'prop-types';

function Analytic({amount, text, size}) {

  return (
    <section className="flex h-full flex-col items-center justify-evenly">
      <p className={`font-coplette ${size ? size : 'text-7xl'} text-blue-600`}>{amount}</p>
      <p className="text-lg">{text}</p>
    </section>
  );
}

Analytic.propTypes = {
  amount: PropTypes.number,
  text: PropTypes.string,
  size: PropTypes.string
};

export default Analytic;
