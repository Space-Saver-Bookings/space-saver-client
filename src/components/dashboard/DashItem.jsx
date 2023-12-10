import PropTypes from 'prop-types';

function DashItem({heading, styling, content, bgColor, headingStyling}) {
  const base = `flex flex-col p-2 gap-5 rounded-xl border-2 ${
    bgColor ? `${bgColor} border-gray-300` : 'border-slate-200 bg-white'
  } shadow-xl`;

  const baseHeading = `px-2 py-1 font-coplette text-xl`;

  // const styles = {
  //   short: base + '',
  //   medium: base + ` ${position}`,
  //   longVert: base + '',
  //   longHori: base + '',
  // };

  return (
    <section className={base + ` ${styling}`}>
      <h3 className={baseHeading + ` ${headingStyling}`}>{heading}</h3>
      {content && (
        <section className="mt-[-.6rem] h-full overflow-clip">
          {content}
        </section>
      )}
    </section>
  );
}

DashItem.propTypes = {
  type: PropTypes.string,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  styling: PropTypes.string,
  content: PropTypes.element,
  bgColor: PropTypes.string,
  headingStyling: PropTypes.string,
};

export default DashItem;
