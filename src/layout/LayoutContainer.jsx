import PropTypes from 'prop-types';

function LayoutContainer({children}) {
  return (
    <div className="grid grid-cols-5 grid-rows-[80px_minmax(0,1fr)] bg-slate-100 h-screen">
      {children}
    </div>
  );
}

LayoutContainer.propTypes = {
  children: PropTypes.element,
};

export default LayoutContainer;
