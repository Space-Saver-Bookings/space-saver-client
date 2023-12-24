import PropTypes from 'prop-types';

function Analytic({text, size, mostUsedRoom, roomsInUse, usersInRooms}) {
  let data;

  switch (text) {
    case 'Rooms in use':
      data = roomsInUse;
      break;
    case 'Users in rooms':
      data = usersInRooms || 0;
      break;
    case 'Most used room':
      data = mostUsedRoom || 'Not enough rooms';
      break;
    default:
      throw new Error(`Unrecognized text: ${text}`);
  }

  return (
    <section className="flex h-full flex-col items-center justify-evenly">
      <p className={`font-coplette ${size ? size : 'text-7xl'} text-blue-600`}>
        {data}
      </p>
      <p className="text-lg">{text}</p>
    </section>
  );
}

Analytic.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  mostUsedRoom: PropTypes.string,
  roomsInUse: PropTypes.any,
  usersInRooms: PropTypes.any
};

export default Analytic;
