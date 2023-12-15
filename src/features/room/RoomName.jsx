import PropTypes from 'prop-types';

function RoomName({roomName}) {
  return (
    <section className="flex h-full w-full items-center justify-center gap-4 font-coplette text-slate-100">
      <p className="rounded-xl bg-blue-600 p-4 md:text-5xl">{roomName}</p>
    </section>
  );
}

RoomName.propTypes = {
  roomName: PropTypes.string,
};

export default RoomName;
