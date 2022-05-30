import { currencyFormatter } from '.';

describe('currencyFormatter', () => {
  it('should return currency', () => {
    const currency = currencyFormatter(1000);
    expect(currency).toEqual('1.000₫');
  });
});
