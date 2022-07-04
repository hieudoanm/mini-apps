export const currencyFormatter = (
  number: number,
  locale: string,
  currency: string,
  minimumFractionDigits: number
): string => {
  if (isNaN(number)) {
    return 'N/A';
  }
  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    currencyDisplay: 'symbol',
  });
  return currencyFormatter.format(number).replace(/\s/g, '');
};

export const usdFormatter = (number: number) => {
  return currencyFormatter(number, 'en-US', 'USD', 2);
};

export const vndFormatter = (number: number) => {
  return currencyFormatter(number, 'vi', 'VND', 0);
};
