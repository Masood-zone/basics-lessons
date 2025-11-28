const sales = [120, 75, 300, 50, 90];

const totalSales = sales.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalSales); 

