/* eslint-disable no-unused-vars */
import {describe, it, expect} from 'vitest'

import { render, screen } from '@testing-library/react';
import DashItem from '../../../components/dashboard/DashItem';

describe('DashItem component', () => {
  it('renders HTML correctly with heading', () => {
    render(<DashItem heading="Heading" />);

    const component = screen.queryByText('Heading')

    expect(component).toBeDefined()
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    expect(component.className).toBe(
      'px-2 py-1 font-coplette text-xl undefined'
    );
  });
  it('renders scrollable dropdown HTML correctly with heading', () => {
    render(
      <DashItem bgColor isDropdown="true" isScroll="true" content heading="Heading" />
    );

    const component = screen.queryByText('Heading')

    expect(component).toBeDefined()
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    expect(component.className).toBe(
      'px-2 py-1 font-coplette text-xl undefined'
    );
  });
});
