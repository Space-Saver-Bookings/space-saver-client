/* eslint-disable no-unused-vars */
import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import MainSectionSpinner from '../../../components/spinner/MainSectionSpinner';

describe('MainSectionSpinner component', () => {
  it('renders HTML correctly', () => {
    render(
        <MainSectionSpinner />
    );

    const component = screen.getByRole('progressbar');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
  });
});
