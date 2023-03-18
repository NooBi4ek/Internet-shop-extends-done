import Main_phone from '../Main/Main_phone.tsx';
import ModalBusket from './ModalBusket/ModalBusket.tsx';
import * as reduxHooks from 'react-redux';
import * as action from '../store/internet_shop_slice.ts';
import * as router from 'react-router-dom';
import shopSliceReducer from '../store/internet_shop_slice.ts';
import { data } from '../testData';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
jest.mock('react-redux');
jest.mock('react-router-dom');
const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('Test adding to order', () => {
  it('should adding item to the order', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);
    mockUseSelector.mockReturnValue(data);
    const mockAddToOrder = jest.spyOn(action, 'addToOrder');
    const act = { type: mockAddToOrder, payload: data[0] };
    const result = shopSliceReducer([], act);
    render(<Main_phone />);
    userEvent.click(screen.getAllByTitle('Buy')[0]);
    expect(mockAddToOrder).toBeCalledTimes(1);
    expect(result).not.toBeNull();
  });
});
