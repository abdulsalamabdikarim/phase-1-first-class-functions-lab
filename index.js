// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}
const returnLastTwoDrivers = function(array){
    return array.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(number){
    const fareMultiplier = function(fare){
        return fare * number;
    }
    return fareMultiplier;
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(array);
}

