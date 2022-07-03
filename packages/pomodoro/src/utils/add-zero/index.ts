export const addZero = (number: number) => {
  return number > 9 ? number.toString() : `0${number}`;
};

export default addZero;
