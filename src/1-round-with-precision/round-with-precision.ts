export const roundWithPrecision = (
  value: number,
  decimalPrecision: number
): number => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });
  
 console.log(formatter.format(4.005)); // "4.01"
 console.log(formatter.format(7.345)); // "7.35"
  return 0;
};


