import { getByRole, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Upper_Header_input } from './styled/styled-header/SHeader';

describe('internet-shop-render', () => {
  it('Render Header Component', () => {
    const SetSearch = jest.fn();
    const SetSearchModal = jest.fn();
    const { container } = render(
      <Upper_Header_input
        type="checkbox"
        placeholder="please,seach..."
        onChange={(e) => SetSearch(e.target.value)}
        onClick={() => SetSearchModal(false)}
      />,
    );
    const check = container.firstChild;
    expect(check).not.toBeChecked();
    userEvent.click(check);
    expect(check).toBeChecked();
  });
});
