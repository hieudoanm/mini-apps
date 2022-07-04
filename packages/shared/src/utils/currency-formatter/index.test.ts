import { usdFormatter, vndFormatter } from '.';

describe('usdFormatter', () => {
  it('should return currency', () => {
    const currency = usdFormatter(1);
    expect(currency).toEqual('$1.00');
  });
});

describe('vndFormatter', () => {
  it('should return currency', () => {
    const currency = vndFormatter(1000);
    expect(currency).toEqual('1.000₫');
  });
});
