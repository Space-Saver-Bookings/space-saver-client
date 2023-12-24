/* eslint-disable no-unused-vars */
import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import CustomizedMenus from '../../../components/menu/CustomizedMenus';

describe('CustomizedMenus component', () => {
  it('renders HTML correctly with heading', () => {
    const options = [
      [
        {
          name: 'Booked Rooms',
          admin: '6585f504c55b2fbbac921ddd',
          rooms: [
            {
              name: 'Room 1',
            },
            {
              name: 'Room 2',
            },
            {
              name: 'Room 3',
            },
            {
              name: 'Room 4',
            },
          ],
        },
        {
          id: '6585f504c55b2fbbac921de0',
          name: 'Sample Space',
          admin: '6585f504c55b2fbbac921ddc',
          rooms: [
            {
              _id: '6585f504c55b2fbbac921de2',
              space_id: {
                _id: '6585f504c55b2fbbac921de0',
                admin_id: {
                  _id: '6585f504c55b2fbbac921ddc',
                  first_name: 'John',
                  last_name: 'Doe',
                  email: 'john.doe@example.com',
                  post_code: '12345',
                  country: 'NZ',
                  position: 'Developer',
                },
                user_ids: [
                  {
                    _id: '6585f504c55b2fbbac921ddc',
                    first_name: 'John',
                    last_name: 'Doe',
                    email: 'john.doe@example.com',
                    post_code: '12345',
                    country: 'NZ',
                    position: 'Developer',
                  },
                  {
                    _id: '6585f504c55b2fbbac921ddd',
                    first_name: 'Alice',
                    last_name: 'Smith',
                    email: 'alice.smith@example.com',
                    post_code: '67890',
                    country: 'AUS',
                    position: 'Manager',
                  },
                  {
                    _id: '6585f504c55b2fbbac921dde',
                    first_name: 'Bob',
                    last_name: 'Johnson',
                    email: 'bob.johnson@example.com',
                    post_code: '54321',
                    country: 'ID',
                    position: 'Designer',
                  },
                ],
                name: 'Sample Space',
                description: 'This is a sample space',
                invite_code: '7y4Bd',
                capacity: 10,
              },
              name: 'Room 1',
              description: 'This is Room 1',
              capacity: 5,
            },
            {
              _id: '6585f504c55b2fbbac921de3',
              space_id: {
                _id: '6585f504c55b2fbbac921de0',
                admin_id: {
                  _id: '6585f504c55b2fbbac921ddc',
                  first_name: 'John',
                  last_name: 'Doe',
                  email: 'john.doe@example.com',
                  post_code: '12345',
                  country: 'NZ',
                  position: 'Developer',
                },
                user_ids: [
                  {
                    _id: '6585f504c55b2fbbac921ddc',
                    first_name: 'John',
                    last_name: 'Doe',
                    email: 'john.doe@example.com',
                    post_code: '12345',
                    country: 'NZ',
                    position: 'Developer',
                  },
                  {
                    _id: '6585f504c55b2fbbac921ddd',
                    first_name: 'Alice',
                    last_name: 'Smith',
                    email: 'alice.smith@example.com',
                    post_code: '67890',
                    country: 'AUS',
                    position: 'Manager',
                  },
                  {
                    _id: '6585f504c55b2fbbac921dde',
                    first_name: 'Bob',
                    last_name: 'Johnson',
                    email: 'bob.johnson@example.com',
                    post_code: '54321',
                    country: 'ID',
                    position: 'Designer',
                  },
                ],
                name: 'Sample Space',
                description: 'This is a sample space',
                invite_code: '7y4Bd',
                capacity: 10,
              },
              name: 'Room 2',
              description: 'This is Room 2',
              capacity: 8,
            },
          ],
        },
      ],
    ];

    render(<CustomizedMenus options={options}>Test Account</CustomizedMenus>);

    const component = screen.queryByText('Booked Rooms');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    expect(component.className).toBe(
      'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-zddlty-MuiButtonBase-root-MuiButton-root'
    );
  });
});
