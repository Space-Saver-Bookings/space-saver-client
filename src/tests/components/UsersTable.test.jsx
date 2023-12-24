/* eslint-disable no-unused-vars */
import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import UsersTable from '../../components/UsersTable';

describe('UsersTable component', () => {
  it('renders HTML correctly', () => {
    render(
      <UsersTable
        rows={[
          {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            email: 'john@example.com',
            post_code: '12345',
            position: 'Developer',
          },
          {
            id: 2,
            first_name: 'Jane',
            last_name: 'Doe',
            email: 'jane@example.com',
            post_code: '54321',
            position: 'Designer',
          },
        ]}
        onDeleteUser={vi.fn()}
        onMakeAdmin={vi.fn()}
      />
    );

    const component = screen.getByText('Jane');
    console.log(component);

    expect(component).toBeDefined();
    expect(component.className).toBe(
      'MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root'
    );
  });
});
