import PropTypes from 'prop-types';
import UsersTable from '../../components/UsersTable';

function EditUsersModalContent({heading, rows}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className='w-full h-full'>
        <UsersTable rows={rows} />
      </div>
    </>
  );
}

EditUsersModalContent.propTypes = {
  heading: PropTypes.string,
  rows: PropTypes.array,
};

export default EditUsersModalContent;
