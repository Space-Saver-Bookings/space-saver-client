/* eslint-disable no-unused-vars */
import {describe, it, expect} from 'vitest';

import {render, screen} from '@testing-library/react';
import EmptyDashContent from '../../../components/dashboard/EmptyDashContent';

describe('EmptyDashContent component', () => {
  it('renders HTML correctly with heading', () => {
    render(<EmptyDashContent message="No rooms found in this space" />);

    const component = screen.queryByText('No rooms found in this space');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
  });
});
