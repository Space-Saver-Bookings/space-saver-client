import {describe, it, expect} from 'vitest';

import {render, screen} from '@testing-library/react';
import MainNav from '../../../components/navigation/MainNav';
import {MemoryRouter} from 'react-router-dom';

describe('MainNav component', () => {
  it('renders HTML correctly', () => {
    render(
      <MemoryRouter>
        <MainNav />
      </MemoryRouter>
    );

    const component = screen.getByText('Home');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
  });
});
