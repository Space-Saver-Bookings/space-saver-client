import PropTypes from 'prop-types';
import DropdownMenu from '../menu/DropdownMenu';

function DashItem({
  heading,
  styling,
  content,
  bgColor,
  headingStyling,
  isScroll,
  isDropdown,
  dropdownOptions,
}) {
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
      {isDropdown ? (
        <div className="flex justify-between">
          <h3 className={baseHeading + ` ${headingStyling}`}>{heading}</h3>
          {/* TODO: options will be an object with the name of the option and a handler as a property */}
          <DropdownMenu options={dropdownOptions} />
        </div>
      ) : (
        <h3 className={baseHeading + ` ${headingStyling}`}>{heading}</h3>
      )}
      {content && (
        <section
          className={`mt-[-1.2rem] h-full ${
            isScroll ? 'overflow-y-scroll' : 'overflow-clip'
          }`}
        >
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
  isScroll: PropTypes.bool,
  isDropdown: PropTypes.bool,
  dropdownOptions: PropTypes.array,
};

export default DashItem;
