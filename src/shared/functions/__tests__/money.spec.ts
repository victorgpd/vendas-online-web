import { convertNumberToMoney } from '../money';

describe('money', () => {
  it('should return cents', () => {
    const returnValue = convertNumberToMoney(544.43);

    expect(returnValue).toContain('R$');
    expect(returnValue).toContain('544,43');
  });

  it('should return integer', () => {
    const returnValue = convertNumberToMoney(600);

    expect(returnValue).toContain('R$');
    expect(returnValue).toContain('600,00');
  });

  it('should return thousand', () => {
    const returnValue = convertNumberToMoney(3999.99);

    expect(returnValue).toContain('R$');
    expect(returnValue).toContain('3.999,99');
  });
});
