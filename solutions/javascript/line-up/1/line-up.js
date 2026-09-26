//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;
  
  let suffix;
  
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    suffix = 'th';
  } else if (lastDigit === 1) {
    suffix = 'st';
  } else if (lastDigit === 2) {
    suffix = 'nd';
  } else if (lastDigit === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
};