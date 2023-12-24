/* eslint-disable no-unused-vars */
import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import Divider from '../../components/Divider';

describe('Divider component', () => {
  it('renders HTML correctly', () => {
    render(
        <Divider />
    );

    const component = screen.getByTestId('divider');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
  });
});
