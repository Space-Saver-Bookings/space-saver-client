import PropTypes from 'prop-types';

function Analytic({text, size}) {
  let data;

  switch (text) {
    case 'Rooms in use':
      data = 8;
      break;
    case 'Users in rooms':
      data = 16;
      break;
    case 'Most used room':
      data = 3023;
      break;
    default:
      throw new Error(`Unrecognized text: ${text}`);
  }

  return (
    <section className="flex h-full flex-col items-center justify-evenly">
      <p className={`font-coplette ${size ? size : 'text-7xl'} text-blue-600`}>
        {data}
      </p>
      <p className="text-lg">{text}</p>
    </section>
  );
}

Analytic.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
};

export default Analytic;
