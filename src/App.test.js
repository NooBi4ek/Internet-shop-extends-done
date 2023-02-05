import { render, screen } from '@testing-library/react';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store/redux';
import userEvent from '@testing-library/user-event';
describe('renders learn react link', () => {
  it('Render App component', () => {
    const wrapper = () => (
      <Provider reduxStore={store}>
        <App />
      </Provider>
    );
    screen.debug();
  });
  it('Render Header component', () => {
    const onClick = jest.fn();
    render(<button onClick={onClick}>Buy</button>);
    screen.debug();
    expect(onClick).toBeCalledTimes(0);
    userEvent.dblClick(screen.getByRole('button'));
    expect(onClick).toBeCalledTimes(2);
  });
});
