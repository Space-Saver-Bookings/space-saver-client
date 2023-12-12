import PropTypes from 'prop-types';
import DashTableList from '../../components/dashboard/DashTableList';

function ListContent({...props}) {
  const {columns, rows, toolTipTitle} = props;
  // const columns = ['Room #', 'Next Available', 'Capacity'];
  // const rows = Array.from(Array(15), () => createData(10310, '28/11/23', 4));

  return (
    <section className="mt-[-.2rem] h-full">
      <DashTableList columns={columns} rows={rows} toolTipTitle={toolTipTitle} />
    </section>
  );
}

ListContent.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  toolTipTitle: PropTypes.string,
};

export default ListContent;
