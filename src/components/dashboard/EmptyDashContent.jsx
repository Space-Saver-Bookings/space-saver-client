import PropTypes from 'prop-types';

function EmptyDashContent({message}) {
  return (
    <section className="flex h-full items-center justify-center">
      <p className="">{message}</p>
    </section>
  );
}

EmptyDashContent.propTypes = {
  message: PropTypes.string,
};

export default EmptyDashContent;
