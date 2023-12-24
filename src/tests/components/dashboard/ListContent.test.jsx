/* eslint-disable no-unused-vars */
import {describe, it, expect} from 'vitest';

import {render, screen} from '@testing-library/react';
import ListContent from '../../../components/dashboard/ListContent';

describe('ListContent component for rooms', () => {
  it('renders loading screen correctly with ', () => {
    render(<ListContent toolTipTitle={'rooms'} contentType="rooms" />);

    const component = screen.queryByText('Loading...');
    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
  });
  it('renders content correctly in a table', () => {
    render(
      <ListContent
        contentType="rooms"
        toolTipTitle={'rooms'}
        rooms={[
          {name: 'Room 1', capacity: 4},
          {name: 'Room 2', capacity: 6},
          {name: 'Room 3', capacity: 8},
        ]}
      />
    );

    const component = screen.getByRole('table');
    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    expect(component.className).toContain('MuiTable');
  });
});
describe('ListContent component for availabilities', () => {
  it('renders loading screen correctly with ', () => {
    render(
      <ListContent
        toolTipTitle={'roomAvailabilities'}
        contentType="roomAvailabilities"
      />
    );

    const component = screen.queryByText('Loading...');
    expect(component).toBeDefined();
  });
  it('renders content correctly in a table', () => {
    render(<ListContent contentType="roomAvailabilities" />);
    // TODO update when this loads data
    const component = screen.getByRole('table');

    expect(component).toBeDefined();
    expect(Object.keys(component.children).length).toBeGreaterThan(0);
    expect(typeof component.children).toBe('object');
    expect(component.className).toContain('MuiTable');
  });
});
describe('ListContent component for spaceUsers', () => {
  it('renders loading screen correctly with ', () => {
    render(
      <ListContent toolTipTitle={'spaceUsers'} contentType="spaceUsers" />
    );

    const component = screen.queryByText('Loading...');
    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
  });
  it('renders content correctly in a table', () => {
    render(
      <ListContent
        contentType="spaceUsers"
        toolTipTitle={'spaceUsers'}
        spaceAdmin={{
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          _id: 1,
          position: 'Developer',
        }}
        spaceUsers={[
          {
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
            _id: 1,
            position: 'Developer',
          },
          {
            first_name: 'Jane',
            last_name: 'Smith',
            email: 'jane.smith@example.com',
            _id: 2,
            position: 'Designer',
          },
        ]}
      />
    );

    const component = screen.getByRole('table');

    expect(component).toBeDefined();
    expect(Object.keys(component.children).length).toBeGreaterThan(0);
    expect(typeof component.children).toBe('object');
    expect(component.className).toContain('MuiTable');
  });
});
describe('ListContent component for roomUsers', () => {
  it('renders loading screen correctly with ', () => {
    render(<ListContent toolTipTitle={'roomUsers'} contentType="roomUsers" />);

    const component = screen.queryByText('Loading...');

    expect(component).toBeDefined();
  });
  it('renders content correctly in a table', () => {
    render(
      <ListContent
        contentType="roomUsers"
        toolTipTitle={'roomUsers'}
        // spaceAdmin={{
        //   first_name: 'John',
        //   last_name: 'Doe',
        //   email: 'john.doe@example.com',
        //   _id: 1,
        //   position: 'Developer',
        // }}
        // spaceUsers={[
        //   {
        //     first_name: 'John',
        //     last_name: 'Doe',
        //     email: 'john.doe@example.com',
        //     _id: 1,
        //     position: 'Developer',
        //   },
        //   {
        //     first_name: 'Jane',
        //     last_name: 'Smith',
        //     email: 'jane.smith@example.com',
        //     _id: 2,
        //     position: 'Designer',
        //   },
        // ]}
      />
    );

    const component = screen.getByRole('table');

    expect(component).toBeDefined();
    expect(Object.keys(component.children).length).toBeGreaterThan(0);
    expect(typeof component.children).toBe('object');
    expect(component.className).toContain('MuiTable');
  });
});
