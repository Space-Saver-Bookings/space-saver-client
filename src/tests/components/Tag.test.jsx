/* eslint-disable no-unused-vars */
import {describe, it, expect, vi} from 'vitest';

import {render, screen} from '@testing-library/react';
import Tag from '../../components/Tag';

describe('Tag component', () => {
  it('renders HTML correctly', () => {
    const options = [
      {
        identifier: 'Room 1',
        roomId: '6585f504c55b2fbbac921de2',
      },
      {
        identifier: 'Room 2',
        roomId: '6585f504c55b2fbbac921de3',
      },
    ];
    render(
      <Tag
        isMultiple
        options={options}
        field={{value: [], onChange: vi.fn()}}
      />
    );

    const component = screen.getAllByText('room');
    const firstComponent = component[0];

    expect(firstComponent).toBeDefined();
    expect(firstComponent.className).toBe(
      'MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root'
    );
  });
});
