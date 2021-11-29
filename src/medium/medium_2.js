import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
let sumCity = 0;
let sumHighway = 0;
for (let i = 0; i < mpg_data.length; i++) {
    sumCity = sumCity + mpg_data[i].city_mpg;
    sumHighway = sumHighway + mpg_data[i].highway_mpg;
}
let city = sumCity / mpg_data.length;
let highway = sumHighway / mpg_data.length;

let yearArray = [];
for (let i = 0; i < mpg_data.length; i++) {
    yearArray[i] = mpg_data[i].year;
}
let yearStats = getStatistics(yearArray);

let hybridCount = 0;
for (let i = 0; i < mpg_data.length; i++) {
    if (mpg_data[i].hybrid) {
        hybridCount++;
    }
}
let hybridRatio = hybridCount / mpg_data.length;

export const allCarStats = {
    avgMpg: {city : city, highway : highway},
    allYearStats: yearStats,
    ratioHybrids: hybridRatio,
};

console.log(allCarStats);
/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */

let hybrid2009 = [];
let notHybrid2009 = [];
let hybrid2010 = [];
let notHybrid2010 = [];
let hybrid2011 = [];
let notHybrid2011 = [];
let hybrid2012 = [];
let notHybrid2012 = [];

for (let i = 0; i < mpg_data.length; i++) {
    if (mpg_data[i].hybrid) {
        if (mpg_data[i].year == 2009) {
            hybrid2009.push(mpg_data[i]);
        }
        if (mpg_data[i].year == 2010) {
            hybrid2010.push(mpg_data[i]);
        }
        if (mpg_data[i].year == 2011) {
            hybrid2011.push(mpg_data[i]);
        }
        if (mpg_data[i].year == 2012) {
            hybrid2012.push(mpg_data[i]);
        }
    } else {
        if (mpg_data[i].year == 2009) {
            notHybrid2009.push(mpg_data[i]);
        }
        if (mpg_data[i].year == 2010) {
            notHybrid2010.push(mpg_data[i]);
        }
        if (mpg_data[i].year == 2011) {
            notHybrid2011.push(mpg_data[i]);
        }
        if (mpg_data[i].year == 2012) {
            notHybrid2012.push(mpg_data[i]);
        }
    }
}

const avgCityHwyMpg = (list) => {
    let sumCityMpg = 0;
    let sumHwyMpg = 0;
    let len = list.length;
    for (let i = 0; i < list.length; i++) {
        sumCityMpg = sumCityMpg + list[i].city_mpg;
        sumHwyMpg = sumHwyMpg + list[i].highway_mpg;
    }
    let avgMpgCity = sumCityMpg / len;
    let avgMpgHwy = sumHwyMpg / len;
    return {
        city : avgMpgCity,
        highway : avgMpgHwy
    };
}

const yearHybridNotHybrid = (yearHybrid, yearNotHybrid) => {
    return {
        hybrid : avgCityHwyMpg(yearHybrid),
        notHybrid : avgCityHwyMpg(yearNotHybrid)
    };

}


let stats2009 = yearHybridNotHybrid(hybrid2009, notHybrid2009);
let stats2010 = yearHybridNotHybrid(hybrid2010, notHybrid2010);
let stats2011 = yearHybridNotHybrid(hybrid2011, notHybrid2011);
let stats2012 = yearHybridNotHybrid(hybrid2012, notHybrid2012);


const carFinale = {
    2009: stats2009,
    2010: stats2010,
    2011: stats2011,
    2012: stats2012
};



export const moreStats = {
    makerHybrids: {},
    avgMpgByYearAndHybrid: carFinale
};
