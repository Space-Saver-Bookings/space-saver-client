/* eslint-disable no-unused-vars */
import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import AddNewBookingModalContent from '../../../../src/features/bookings/AddNewBookingModalContent';
import {Modal} from '@mui/material';
import ModalBox from '../../../components/modal/ModalBox.jsx';
import ModalProvider from '../../../contexts/ModalContext';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

describe('AddNewBookingModalContent component', () => {
  it('renders HTML correctly', () => {
    const selectedBooking = false;
    const handleClose = vi.fn();
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ModalProvider>
          <Modal
            open={open && !selectedBooking}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox
              content={
                <AddNewBookingModalContent
                  heading="Test Heading"
                  handleClose={() => {
                    vi.fn();
                  }}
                />
              }
              height="h-auto"
              width="w-[40rem]"
            />
          </Modal>
        </ModalProvider>
      </LocalizationProvider>
    );

    const component = screen.getByText('Test Heading');

    expect(component).toBeDefined();
    expect(component.children.toString()).toBe('[object HTMLCollection]');
    expect(component.className).toBe('mb-2 mt-[-.6rem] font-coplette text-3xl');
  });
});
