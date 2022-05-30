export const currencyFormatter = (number: number) => {
  if (isNaN(number)) {
    return 'N/A';
  }
  const usdNumberFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    currencyDisplay: 'symbol',
  });
  return usdNumberFormatter.format(number);
};
