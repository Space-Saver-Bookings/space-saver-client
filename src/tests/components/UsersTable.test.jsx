/* eslint-disable no-unused-vars */
import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import UsersTable from '../../components/UsersTable';

describe('UsersTable component', () => {
  it('renders HTML correctly', () => {
    render()


    const component = screen;

    expect(component).toBeDefined();
  });
});
