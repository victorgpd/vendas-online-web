import { fireEvent, render } from '@testing-library/react';
import Header from '../Header';
import { logout } from '../../../functions/connection/auth';

export enum HeaderTestIdEnum {
  HEADER_LOGO = 'HEADER_LOGO',
  HEADER_MODAL = 'HEADER_MODAL',
  HEADER_MODAL_P = 'HEADER_MODAL_P',
  HEADER_LOGO_MENU = 'HEADER_LOGO_MENU',
  HEADER_CONTAINER = 'HEADER_CONTAINER',
}

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../../functions/connection/auth', () => ({
  logout: jest.fn(),
}));

describe('Test Header', () => {
  it('should render', () => {
    const { getByTestId } = render(<Header menuActive={() => false} />);

    expect(getByTestId(HeaderTestIdEnum.HEADER_CONTAINER)).toBeDefined();
    expect(getByTestId(HeaderTestIdEnum.HEADER_LOGO)).toBeDefined();
  });

  it('should render modal in click logo', () => {
    const { getByTestId, queryAllByTestId } = render(<Header menuActive={() => false} />);
    const logo = getByTestId(HeaderTestIdEnum.HEADER_LOGO);

    expect(queryAllByTestId(HeaderTestIdEnum.HEADER_MODAL).length).toBe(0);
    fireEvent.click(logo);
    expect(queryAllByTestId(HeaderTestIdEnum.HEADER_MODAL).length).toBe(1);
  });

  it('should render modal in click logo an confirm logout', () => {
    const { getByTestId, getByText } = render(<Header menuActive={() => false} />);
    const logo = getByTestId(HeaderTestIdEnum.HEADER_LOGO);
    fireEvent.click(logo);

    const confirmButton = getByText('Sim');
    fireEvent.click(confirmButton);
    // expect(logout).toHaveBeenCalled();
  });
});
