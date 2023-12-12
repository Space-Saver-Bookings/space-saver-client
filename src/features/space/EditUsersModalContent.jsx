import PropTypes from 'prop-types';
import UsersTable from '../../components/UsersTable';
// import ListContent from '../../components/dashboard/ListContent';

function EditUsersModalContent({heading, rows}) {
  return (
    <>
      <h4 className="mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div>
        {/* <ListContent columns={columns} rows={rows}/> */}
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
