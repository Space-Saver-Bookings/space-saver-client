import PropTypes from 'prop-types';

// {type, title, content;}
function DashCard({type, heading}) {
  const base = 'flex flex-col p-3 gap-5';

  const styles = {
    short: base + '',
    medium:
      base +
      ' col-start-1 col-end-8 row-start-1 row-end-[7] rounded-xl border-2 bg-white',
    longVert: base + '',
    longHori: base + '',
  };

  return (
    <section className={styles[type]}>
      <h3 className="font-coplette text-xl px-2">{heading}</h3>
      <section className="bg-green-200 h-full">
        {/* {content} */}
        <h4>Content</h4>
      </section>
    </section>
  );
}

DashCard.propTypes = {
  type: PropTypes.string,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // content: PropTypes.element,
};

export default DashCard;
