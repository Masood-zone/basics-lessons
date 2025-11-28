
//filter out values less than 0 or greater than  100
const readings = [50, -3, 120, 75, 0, 95, 150, -20];
const lessReadings  = readings.filter((readings) => readings < 0 );
console.log( lessReadings);
// filter out values greater than  100
const greaterReadings = readings.filter(( readings)=> readings >  100 )
console.log( greaterReadings);