const {getInformationById,getLastCarInformation,getAllCarModelsInSortedOrder,getAllCarYears,getLengthOfAllCarsLessThanTwoThousand,getDataForBMWAndAudi} = require("./Solutions");


// A Function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
    //"Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
console.log(getInformationById(33));
//edge cases
//1) if we did not pass the id
console.log(getInformationById());

//2) if id did not match
console.log(getInformationById(274));


//A Function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
    //"Last car is a *car make goes here* *car model goes here*"

console.log(getLastCarInformation());

// A function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

console.log(getAllCarModelsInSortedOrder(true)); // if you want unique then pass true

console.log(getAllCarModelsInSortedOrder(false)) // if you want all the car


// Afunction that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

console.log(getAllCarYears());


// A function that out how many cars were made before the year 2000 and return the array of older cars and log its length.

console.log("length of all cars " ,getLengthOfAllCarsLessThanTwoThousand());

// edge case if no car less than 2000

// a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

console.log(getDataForBMWAndAudi());

