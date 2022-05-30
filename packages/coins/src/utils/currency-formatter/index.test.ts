import { currencyFormatter } from '.';

describe('currencyFormatter', () => {
  it('should return currency', () => {
    const currency = currencyFormatter(1);
    expect(currency).toEqual('$1.00');
  });
});
