/* eslint-disable no-unused-vars */
import {describe, it, expect} from 'vitest'

import { render, screen } from '@testing-library/react';
import Button from '../../../components/buttons/Button';

describe('Button component', () => {
  it('renders HTML correctly with no styling', () => {
    render(<Button noStyle onClick="click">Button</Button>);

    const component = screen.queryByText('Button')

    expect(component).toBeDefined()
    expect(component.children.toString()).toBe('[object HTMLCollection]');
  });
  it('renders HTML correctly with styling', () => {
    render(<Button onClick="click">Button</Button>);

    const component = screen.queryByText('Button')

    expect(component).toBeDefined()
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    const classListString = Array.from(component.classList).join(' ');
    expect(classListString).toBe(
      'rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-2xl'
    );
  });
});
