import Header from './Header.tsx';
import * as reduxHooks from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { data } from '../testData';
jest.mock('react-router-dom');
jest.mock('react-redux');
const mockSelector = jest.spyOn(reduxHooks, 'useSelector');
describe('Header tests', () => {
  it('should modalcontent is open', async () => {
    mockSelector.mockReturnValue(data);
    render(<Header />);
    userEvent.click(screen.getByRole('searchbox'));
    await waitFor(() =>
      expect(screen.getByTitle('Modal content')).toBeInTheDocument(),
    );
  });
});
