export const currencyFormatter = (number: number) => {
  const usdNumberFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    currencyDisplay: 'symbol',
  });
  return usdNumberFormatter.format(number);
};
