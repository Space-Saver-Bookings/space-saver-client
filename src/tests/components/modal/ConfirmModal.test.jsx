import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import ConfirmModal from '../../../components/modal/ConfirmModal';
import ModalProvider from '../../../contexts/ModalContext';

describe('ConfirmModal component', () => {
  it('renders HTML correctly', () => {
    const handleYes = vi.fn();

    render(
      <ModalProvider>
        <ConfirmModal heading="Are you sure?" handleYes={handleYes} />
      </ModalProvider>
    );

    const component = screen.queryByText('Are you sure?');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    expect(component.className).toBe('mt-[-.6rem] font-coplette text-3xl');
  });
});
