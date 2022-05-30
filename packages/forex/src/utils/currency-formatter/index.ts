export const currencyFormatter = (number: number): string => {
  const usdNumberFormatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    currencyDisplay: 'symbol',
  });
  return usdNumberFormatter.format(number).replaceAll(/\s/g, '');
};
