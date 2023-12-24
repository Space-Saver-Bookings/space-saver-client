/* eslint-disable no-unused-vars */
import {describe, it, expect} from 'vitest';

import {render, screen} from '@testing-library/react';
import DashTableList from '../../../components/dashboard/DashTableList';

describe('DashTableList component', () => {
  it('renders HTML correctly with heading', () => {
    function createData(roomNumber, title, date, time, duration, attendees) {
      return {roomNumber, title, date, time, duration, attendees};
    }
    const columns = [
      'Room #',
      'Title',
      'Date',
      'Time',
      'Duration',
      'Attendees',
    ];
    const rows = Array.from(Array(15), () =>
      createData(10310, 'Booking with...', '28/11/23', '12:00pm', '1hr', 2)
    );

    render(<DashTableList columns={columns} rows={rows} />);

    const component = screen.queryByText('Title');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    expect(component.className).toBe(
      'MuiTableCell-root MuiTableCell-head MuiTableCell-stickyHeader MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1r01tge-MuiTableCell-root'
    );
  });
});
