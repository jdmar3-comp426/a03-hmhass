import {variance} from "./data/stats_helpers.js";
import { maxAndMin } from "../mild/mild_1.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;

}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let copy = array.sort(function(a, b){return b - a});
    if (array.length % 2 !== 0) {
        let i = Math.floor(array.length / 2);
        return copy[i];
    } else {
        let upper = array.length / 2;
        let lower = upper - 1;
        let result = copy[lower] + copy[upper];
        return result / 2;
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let length = array.length;
    let sum = getSum(array);
    let median = getMedian(array);
    let min = Math.min.apply(null, array);
    let max = Math.max.apply(null, array);
    let mean = sum / length;
    let vari = variance(array, mean);
    let stddev = Math.sqrt(vari);
    let result = {min : min, median : median, max : max, variance : vari, mean : mean, length : length, sum : sum, standard_deviation : stddev };
    return result;

}

