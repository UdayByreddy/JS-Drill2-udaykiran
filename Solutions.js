const inventory = require("./Data");

//==== Problem #1 ====
    // The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
    //"Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
    
function getInformationById(id){
    if(id===undefined || id===null){ // if did not pass the id , we return it
        return "ID is required";
    }
    if(id>inventory.length){
        return "ID not found";
    }
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].id === id){      // id is match with our id then return the data

            return "Car "+id+" is a "+ inventory[i].car_year+" "+inventory[i].car_make+" "+inventory[i].car_model;
        }
    }
    return "Car "+id+" Not Found in data"; // if id not match then return the message

}

// ==== Problem #2 ====
    // The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
    //"Last car is a *car make goes here* *car model goes here*"

function getLastCarInformation(){
    let lastCarDetails = inventory[inventory.length-1]; // get the length using length property
    return "Last car is a "+lastCarDetails.car_make+" "+lastCarDetails.car_model;
}


// ==== Problem #3====
    // The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function getAllCarModelsInSortedOrder(unique){
    let carModels = [];
    for(let i=0;i<inventory.length;i++){
        let model = inventory[i].car_model;
        carModels.push(model);               // pushing the all the carmodels 
    }
    carModels.sort();  // sorting the carmodels


    // if then want unique then we can remove the comments and run
    
       let uniqueCarModels = [...new Set(carModels)];  // and return it 
    

    return unique?uniqueCarModels:carModels;
}


// ==== Problem #4====
 // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

 function getAllCarYears(){
    let carYears = [];
    for(let i=0;i<inventory.length;i++){
        let year = inventory[i].car_year;
        carYears.push(year);              // pushing all carYears in array
    }
   /* if want the unique year then use this 
    let uniqueCarYear = [...new Set(carYears)];
   */

    return carYears;
 }

 // ==== Problem #5====
 // The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

 function getLengthOfAllCarsLessThanTwoThousand(){
    let carYears = getAllCarYears();   // getting all unique data length of all cars
    let length = 0;
    for(let i=0;i<carYears.length;i++){
        if(carYears[i]<2000){
            length++;              // inc the length if less than 2000
        }
    }

    return length>0?length:"No cars that are less than 2000";
 }

 // ==== Problem #6 ====
 // A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

 function getDataForBMWAndAudi(){
    let BMWAndAudi = [];
    for(let i=0;i<inventory.length;i++){
        let carMake = inventory[i].car_make;        
        if(carMake==="BMW"|| carMake==="Audi"){              // if it is BMW or Audi we push that object
            BMWAndAudi.push(JSON.stringify(inventory[i]));   //here convert object into string format
        }
    }
    return BMWAndAudi.length>0?BMWAndAudi:"NO Cars in inventory";
 }


 module.exports= {getInformationById,getLastCarInformation,getAllCarModelsInSortedOrder,getAllCarYears,getLengthOfAllCarsLessThanTwoThousand,getDataForBMWAndAudi};