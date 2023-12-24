import {describe, it, expect} from 'vitest';

import {render, screen} from '@testing-library/react';
import LogoDesktop from '../../components/LogoDesktop';

describe('LogoDesktop component', () => {
  it('renders HTML correctly', () => {
    render(<LogoDesktop />);

    const component = screen.getByAltText('SpaceSaver desktop logo');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    expect(component.className).toBe('mt-[-3rem]');
  });
});
