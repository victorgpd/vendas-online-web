import { render, screen } from '@testing-library/react';
import Button from '../button';

const TEXT = 'TESTE';
const TEST_ID = 'TEST_ID';
const MARGIN = '20px';

describe('Test Button', () => {
  beforeEach(() => {
    render(
      <Button data-testid={TEST_ID} margin={MARGIN}>
        {TEXT}
      </Button>,
    );
  });
  it('should render', () => {
    expect(screen.getByText(TEXT)).toBeDefined();
  });

  it('should render with margin', () => {
    expect(screen.getByTestId(TEST_ID)).toHaveAttribute('style', `margin: ${MARGIN};`);
  });
});
