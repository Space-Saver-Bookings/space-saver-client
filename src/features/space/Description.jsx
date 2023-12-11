import PropTypes from 'prop-types';

function Description({descriptionText}) {
  return (
    <section className="px-3">
      <p>{descriptionText}</p>
    </section>
  );
}

Description.propTypes = {
  descriptionText: PropTypes.string,
};

export default Description;
