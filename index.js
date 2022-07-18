// Code your solution in this file!
//returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(x){
    return function(fare) {
        return fare*x
    }
} 
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers,x) {
    return x(drivers)
}