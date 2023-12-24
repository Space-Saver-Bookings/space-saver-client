/* eslint-disable no-unused-vars */
import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import Calendar from '../../../../src/features/bookings/Calendar';
import ModalProvider from '../../../contexts/ModalContext';
import ModalBox from '../../../components/modal/ModalBox.jsx';

describe('Calendar component', () => {
  it('renders HTML correctly', () => {
    const bookings = [
      {
        _id: '6585f504c55b2fbbac921de5',
        room_id: {
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
        primary_user_id: {
          _id: '6585f504c55b2fbbac921ddc',
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          post_code: '12345',
          country: 'NZ',
          position: 'Developer',
        },
        invited_user_ids: [],
        title: 'Meeting 1',
        description: 'This is Meeting 1',
        start_time: '2023-12-22T20:43:46.747Z',
        end_time: '2023-12-22T21:43:46.747Z',
      },
      {
        _id: '6585f504c55b2fbbac921de6',
        room_id: {
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
        primary_user_id: {
          _id: '6585f504c55b2fbbac921ddd',
          first_name: 'Alice',
          last_name: 'Smith',
          email: 'alice.smith@example.com',
          post_code: '67890',
          country: 'AUS',
          position: 'Manager',
        },
        invited_user_ids: [],
        title: 'Meeting 2',
        description: 'This is Meeting 2',
        start_time: '2023-12-22T22:43:46.747Z',
        end_time: '2023-12-22T23:43:46.747Z',
      },
      {
        _id: '6585f504c55b2fbbac921de7',
        room_id: {
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
        primary_user_id: {
          _id: '6585f504c55b2fbbac921dde',
          first_name: 'Bob',
          last_name: 'Johnson',
          email: 'bob.johnson@example.com',
          post_code: '54321',
          country: 'ID',
          position: 'Designer',
        },
        invited_user_ids: [],
        title: 'Meeting 3',
        description: 'This is Meeting 3',
        start_time: '2023-12-22T22:43:46.747Z',
        end_time: '2023-12-23T00:43:46.747Z',
      },
      {
        _id: '6585f504c55b2fbbac921de8',
        room_id: {
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
        primary_user_id: {
          _id: '6585f504c55b2fbbac921ddc',
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          post_code: '12345',
          country: 'NZ',
          position: 'Developer',
        },
        invited_user_ids: [],
        title: 'Meeting 4',
        description: 'This is Meeting 4',
        start_time: '2023-12-23T01:43:46.747Z',
        end_time: '2023-12-23T02:43:46.747Z',
      },
    ];
    render(
      <Calendar
        myBookingFilter={true}
        bookings={bookings}
        onEditBooking={vi.fn()}
      ></Calendar>
    );

    const component = screen.getByTestId('calendar');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    expect(component.className).toBe(
      'flex h-full flex-col items-center justify-center'
    );
  });
});
