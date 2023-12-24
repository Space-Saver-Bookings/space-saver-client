import {describe, it, expect} from 'vitest';

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
