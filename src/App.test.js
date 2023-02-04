import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Upper_Header_input } from './styled/styled-header/SHeader';
import store from './store/redux';
import { Provider } from 'react-redux';
import { Main_phone } from './Main/Main_phone.tsx';
describe('internet-shop-render', () => {
  it('Render Header Component', () => {
    const SetSearch = jest.fn();
    const { container } = render(
      <Upper_Header_input
        type="checkbox"
        onChange={(e) => SetSearch(e.target.value)}
      />,
    );
    const check = container.firstChild;
    expect(check).not.toBeChecked();
    userEvent.click(check);
    expect(check).toBeChecked();
  });
  it('Render Main Phone component', () => {
    const wrapper = (
      <Provider store={store}>
        <Main_phone />
      </Provider>
    );
    const btn = wrapper.firstChild;
  });
});
