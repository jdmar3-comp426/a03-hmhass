console.log('MILD 1!!!!!');

import { getIncreasingArray } from "./mild/mild_1"

console.log(getIncreasingArray(3, 8));

import { sumToString } from "./mild/mild_1";

console.log(sumToString(3, 8));

import { maxAndMin } from "./mild/mild_1";

console.log(maxAndMin([1, 2, 3, 4, 5]));

import { countArray } from "./mild/mild_1";

console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]))

console.log('MILD 2!!!!!');

import { identifyVariable } from "./mild/mild_2";

console.log(identifyVariable(4));

import { identifyArray } from "./mild/mild_2";

console.log(identifyArray(['some', 3, [3, 4], false]))

import { removeKey } from "./mild/mild_2";

console.log(removeKey({
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
}, 'password'));

import { removeKeyNonDestructive } from "./mild/mild_2";

console.log(removeKeyNonDestructive({
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
}, 'password'))

import { removeKeys } from "./mild/mild_2";
console.log(removeKeys({
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
}, ['password', 'age']));

import { getSum } from "./medium/medium_1";
console.log(getSum([1, 2, 3, 4, 5]));

import { getMedian } from "./medium/medium_1";
console.log(getMedian([1, 2, 3, 4, 5]));
console.log(getMedian([1, 2, 3, 4, 5, 6]))

import { getStatistics } from "./medium/medium_1";
console.log(getStatistics([3,2,4,5,5,5,2,6,7]))
