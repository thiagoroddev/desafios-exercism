// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let numberOfBirds = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    numberOfBirds += birdsPerDay[index];
  }
  return numberOfBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
   let inicio = (week - 1) * 7;
  let fim = week * 7;
  let counterBirds = 0;

  for (let index = inicio; index < fim; index++) {
    counterBirds += birdsPerDay[index];
  }
  return counterBirds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index += 2) {
    birdsPerDay[index]++;
  }

  return birdsPerDay;
}
