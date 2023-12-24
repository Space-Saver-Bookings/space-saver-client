
import {describe, it, expect} from 'vitest';

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
