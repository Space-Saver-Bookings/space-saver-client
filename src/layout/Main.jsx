import PropTypes from 'prop-types';

function Main({children}) {
  return (
    <div className=" col-span-full col-start-2 row-span-full row-start-2 p-5">
      {children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element,
};

export default Main;
