import PropTypes from 'prop-types';

function DashItem({heading, styling, content}) {
  const base = 'flex flex-col p-2 gap-5 rounded-xl border-2 bg-white';

  // const styles = {
  //   short: base + '',
  //   medium: base + ` ${position}`,
  //   longVert: base + '',
  //   longHori: base + '',
  // };

  return (
    <section className={base + ` ${styling}`}>
      <h3 className="px-2 font-coplette text-xl">{heading}</h3>
      <section className="h-full overflow-clip mt-[-.6rem]">
        {content}
      </section>
    </section>
  );
}

DashItem.propTypes = {
  type: PropTypes.string,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  styling: PropTypes.string,
  content: PropTypes.element,
};

export default DashItem;
