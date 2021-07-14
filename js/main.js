const array = [2, 4, 7, 5, 4, 3, 8];

const result=array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});

console.log(result);


function LeapYear(year) {
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

console.log(LeapYear(2020));
console.log(LeapYear(2021));
