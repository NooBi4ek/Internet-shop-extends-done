import Main_phone from './Main/Main_phone';
import * as reduxHooks from 'react-redux';
import * as action from './store/internet_shop_slice.ts';
import * as router from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { findByText, render, screen, within } from '@testing-library/react';
jest.mock('react-redux');
jest.mock('react-router-dom');
const mockDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mocknavigate = jest.spyOn(router, 'useNavigate');
const mockuseSelector = jest.spyOn(reduxHooks, 'useSelector');
const data = [
  {
    id: 1,
    name: 'Apple iPhone 11 128GB',
    company: 'Apple',
    short_desc: 'something',
    img: 'Apple_Iphone11_128.jpg',
    threads_name: 'Apple A13 Bionic',
    front_camera: '12MP',
    main_camera: '12MP',
    count: 1,
    quantity_threads: 6,
    memory: 128,
    price: 10000,
    click: false,
    click_versus: false,
  },
  {
    id: 2,
    name: 'Apple iPhone 13 128GB',
    company: 'Apple',
    short_desc: 'something',
    img: 'Apple_Iphone13_128.jpg',
    threads_name: 'Apple A14 Bionic',
    front_camera: '12MP',
    main_camera: '12MP',
    price: 15000,
    count: 1,
    quantity_threads: 6,
    memory: 128,
    click: false,
    click_versus: false,
  },
];
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
