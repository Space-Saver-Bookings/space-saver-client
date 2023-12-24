import { describe, it, expect } from 'vitest';

import {render, screen} from '@testing-library/react';
import AddNewRoomModalContent from '../../../components/modal/AddNewRoomModalContent';
import ModalProvider from '../../../contexts/ModalContext';


describe('AddNewRoomModalContent component', () => {
  it('renders HTML correctly', () => {
    render(
      <ModalProvider>
      <AddNewRoomModalContent heading="Add New Room" spaceIdFromRooms="1234" />
      </ModalProvider>
    );

    const component = screen.queryByText('Add New Room');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    expect(component.className).toBe('mb-2 mt-[-.6rem] font-coplette text-3xl');
  });
});
