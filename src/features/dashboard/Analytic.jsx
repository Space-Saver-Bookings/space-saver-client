import PropTypes from 'prop-types';

function Analytic({data, text, size}) {

  return (
    <section className="flex h-full flex-col items-center justify-evenly">
      <p className={`font-coplette ${size ? size : 'text-7xl'} text-blue-600`}>{data}</p>
      <p className="text-lg">{text}</p>
    </section>
  );
}

Analytic.propTypes = {
  data: PropTypes.number,
  text: PropTypes.string,
  size: PropTypes.string
};

export default Analytic;
