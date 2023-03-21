const returnFirstTwoDrivers = (array) => {
    return array.slice(0, 2);
};

const returnLastTwoDrivers = (array) => {
    return array.slice(array.length - 2, array.length);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
    return function (fare) {
        return fare * num;
    };
};

const fareDoubler = (fare) => {
    const double = createFareMultiplier(2)(fare);
    return double;
};

const fareTripler = (fare) => {
    const triple = createFareMultiplier(3)(fare);
    return triple;
};

const selectDifferentDrivers = (array, cb) => {
    let selected = cb(array);
    return selected;
};