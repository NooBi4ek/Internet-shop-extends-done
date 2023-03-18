import Main_phone from './Main/Main_phone';
import * as reduxHooks from 'react-redux';
import * as action from './store/internet_shop_slice.ts';
import { data } from './testData';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
jest.mock('react-redux');
jest.mock('react-router-dom');
const mockDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockuseSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('Main Phone test', () => {
  it('should button buy is work', () => {
    const dispatch = jest.fn();
    mockDispatch.mockReturnValue(dispatch);
    mockuseSelector.mockReturnValue(data);
    const mockAddToOrder = jest.spyOn(action, 'addToOrder');
    const component = render(<Main_phone />);
    expect(mockAddToOrder).toBeCalledTimes(0);
    userEvent.click(screen.getAllByRole('button')[0]);
    expect(mockAddToOrder).toBeCalledTimes(1);
    expect(component).toMatchSnapshot();
  });
});
