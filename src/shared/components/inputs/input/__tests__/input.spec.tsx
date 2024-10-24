import { render, screen } from '@testing-library/react';
import Input from '../input';
import { InputTestIdEnum } from './InputTestIdEnum';

const TITLE_MOOK = 'TITLE_MOOK';
const TEST_ID = 'TEST_ID_INPUT';
const MARGIN = '20px';

describe('Test Input', () => {
  beforeEach(() => {
    render(<Input data-testid={TEST_ID} margin={MARGIN} />);
  });

  it('should render', () => {
    expect(screen.getByTestId(TEST_ID)).toBeDefined();
    expect(screen.getByTestId(InputTestIdEnum.BOX_INPUT)).toBeDefined();
  });

  it('should render with margin', () => {
    expect(screen.getByTestId(InputTestIdEnum.BOX_INPUT)).toHaveAttribute(
      'style',
      `margin: ${MARGIN};`,
    );
  });

  it('should hide Title in title undefined', () => {
    const element = screen.queryAllByTestId(InputTestIdEnum.INPUT_TITLE);

    expect(element.length).toEqual(0);
  });

  it('should render Title', () => {
    const { queryAllByTestId } = render(
      <Input campo={TITLE_MOOK} data-testid={TEST_ID} margin={MARGIN} />,
    );
    const element = queryAllByTestId(InputTestIdEnum.INPUT_TITLE);

    expect(element.length).toEqual(1);
  });

  it('should render Title', () => {
    const { getByText } = render(
      <Input campo={TITLE_MOOK} data-testid={TEST_ID} margin={MARGIN} />,
    );
    const element = getByText(TITLE_MOOK);

    expect(element).toBeDefined();
  });
});
