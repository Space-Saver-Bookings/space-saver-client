import PropTypes from 'prop-types';

function Button({children}) {
  return <button className='bg-white py-2 px-4 rounded-lg border border-gray-300 shadow-2xl'>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
