/* eslint-disable no-unused-vars */
import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import AccountMenu from '../../../components/menu/AccountMenu';
import {AuthProvider} from '../../../auth/AuthContext';
import {MemoryRouter} from 'react-router-dom';

describe('AccountMenu component', () => {
  it('renders HTML correctly with heading', () => {
    render(
      <AuthProvider>
          <MemoryRouter>
            <AccountMenu name={'Test User'}></AccountMenu>
          </MemoryRouter>
      </AuthProvider>
    );

    const component = screen.queryByRole('button');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    expect(component.className).toBe(
      'MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-137ul40-MuiButtonBase-root-MuiIconButton-root'
    );
  });
});
