/* eslint-disable no-unused-vars */
import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import ModalBox from '../../../components/modal/ModalBox';
import ModalProvider from '../../../contexts/ModalContext';

describe('ModalBox component', () => {
  it('renders HTML correctly', () => {

    render(
      <ModalProvider>
        <ModalBox
          content={vi.fn()}
          height="h-auto"
          width="w-auto"
        />
      </ModalProvider>
    );

    const component = screen.getByRole('button');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
  });
});
