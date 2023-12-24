/* eslint-disable no-unused-vars */
import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import FullPageSpinner from '../../../components/spinner/FullPageSpinner';

describe('FullPageSpinner component', () => {
  it('renders HTML correctly', () => {
    render(
        <FullPageSpinner />
    );

    const component = screen.getByRole('progressbar');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
  });
});
