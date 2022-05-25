export const toCurrency = (number: number) => {
  return number.toString().replace(/(\d)(?=(\d{3})+\b)/g, "$1,");
};
