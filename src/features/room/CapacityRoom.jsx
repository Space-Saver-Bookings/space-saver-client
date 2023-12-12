import PropTypes from 'prop-types';

function CapacityRoom({capacityAmount}) {
  return (
    <section className="flex h-full w-full items-center justify-center gap-4 font-coplette text-slate-100">
      <p className="rounded-xl bg-blue-600 p-4 md:text-7xl">{capacityAmount}</p>
    </section>
  );
}

CapacityRoom.propTypes = {
  capacityAmount: PropTypes.number,
};

export default CapacityRoom;
