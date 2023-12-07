import PropTypes from 'prop-types';

function Main({children}) {
  return (
    <main className=" col-span-full col-start-2 row-span-full row-start-2 p-5 px-8 mt-[-0.8rem] max-w-7xl max-h-[58rem]">
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.element,
};

export default Main;
