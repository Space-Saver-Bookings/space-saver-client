import PropTypes from 'prop-types';

function Button({children, onClick, noStyle}) {
  return (
    <button
      className={noStyle ? '' : `rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-2xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  noStyle: PropTypes.bool,
};

export default Button;
