import PropTypes from 'prop-types';

function LayoutContainer({children}) {
  return <div className="grid grid-cols-2 grid-rows-2">{children}</div>;
}

LayoutContainer.propTypes = {
  children: PropTypes.element,
};

export default LayoutContainer;
