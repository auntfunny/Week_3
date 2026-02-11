/* EJERCICIO 1 ***************************************************************************

Pseudcode:

Begin:
    Get 1st number
    Get 2nd number
    Get 3rd number
    Get 4th number
    Calculate average
    Print Message depending on average:
        >=90 : Excellent
        >=75 : Great
        >=60 : Good
        <60 : Not good
End

**********************************************************************************************/


let grade1 = Number(prompt("Please enter 1st grade from 0 to 100: "));
let grade2 = Number(prompt("Please enter 2st grade from 0 to 100: "));
let grade3 = Number(prompt("Please enter 3st grade from 0 to 100: "));
let grade4 = Number(prompt("Please enter 4st grade from 0 to 100: "));

let average = (grade1 + grade2 + grade3 + grade4) / 4;

if (average >= 90){
    alert(`Excellent! The average is ${average}`);
} else if (average >= 75){
    alert(`Great! The average is ${average}`);
} else if (average >= 60){
    alert(`Good. The average is ${average}`);
} else{
    alert(`Not good. The average is ${average}`);
} 


/*EJERCICIO 2 *****************************************************************************

Pseudocode:

Begin
    Get age
    Get Student
    Get Distance

    If age is below 18
        Calculate 50% of total
    If age is above 60
        Calculate 40% of total

    If is a Student
        Calculate 75% of price
    
    If distance is greater than 30 Kilometers
        Calculate 10% increase in price
    
    Print the total price to User
End

*********************************************************************************************/


const TARIFF = 10;

let edad = parseInt(prompt("Please enter your age: "));
let student = prompt("Are you a student (yes or no): ");
let distance = Number(prompt("Please enter the amount of kilometers traveled: "));

let discount = 0;
let total = TARIFF;

if(edad < 18){
    total *= 0.5;
} else if(edad > 60){
    total *= 0.4;
} else if (student === "Yes" || student === "yes"){
    total *= 0.75;
}

if(distance >= 30){
    total *= 1.1;
}

alert(`Your total price is $${total}`);


/* EJERCICIO 3 ********************************************************************************

Pseudocode:

Begin
    Ask for desired conversion
    Ask for value
    Calculate based on selected conversion
        if 1
            Calculate Value from C to F
        if 2
            Calculate Value from F to C
        if 3
            Calculate Value from Km to M
        if 4
            Calculate Value from M to Km
        if anything else
            let user know it is invalid
    Print end conversion to the user
End

**********************************************************************************************/


let operation = Number(prompt(`Enter number of desired conversion:
    1. Convert from Celsius to Fahrenheit
    2. Convert from Fahrenheit to Celsius
    3. Convert from Kilometers to Meters
    4. Convert from Meters to Kilometers`));

let valueInitial = 0;
let valueConversion = 0;

switch(operation){
    case(1):
        valueInitial = Number(prompt("Enter degrees Celcius to convert to Fahrenheit: "));
        valueConversion = (valueInitial * (9/5))+32;
        alert(`The conversion from ${valueInitial} degrees Celcius is  ${valueConversion} degrees Fahrenheit`)
        break;
    case(2):
        valueInitial = Number(prompt("Enter degrees Fahrenheit to convert to Celcius: "));
        valueConversion = (valueInitial - 32) * (5/9);
        alert(`The conversion from ${valueInitial} degrees Fahrenheit is  ${valueConversion} degrees Celcius`)
        break;
    case(3):
        valueInitial = Number(prompt("Enter kilometers to convert to meters: "));
        valueConversion = valueInitial * 1000;
        alert(`The conversion from ${valueInitial} kilometers is  ${valueConversion} meters`)
        break;
    case(4):
        valueInitial = Number(prompt("Enter meters to convert to kilometers: "));
        valueConversion = valueInitial / 1000;
        alert(`The conversion from ${valueInitial} meters is  ${valueConversion} kilometers`)
        break;
    default:
        alert("Invalid Option");
}


/* EJERCICIO 4 *******************************************************************************

Pseudocode:

Begin
    Ask for total price

    If it is more then 500
        Calculate a 10% discount
        Ask if there is a frequent buyers card
        if they have a card
            calculate another 5% discount
    if it is below or equal to 100
        add a 5% charge

    Calculate total cost

    Print to user the total cost and the discount applied
End
 
*********************************************************************************************/

let price = Number(prompt("Enter the total cost: "));


let totalDiscount = 0;

if(price > 500){
    totalDiscount += 10;
    let frequentBuyersCard = prompt("Do you have a frequent buyers' card? (Yes or No)");
    if(frequentBuyersCard === "yes" || frequentBuyersCard === "Yes"){
        totalDiscount += 5;
    }
} else if(price < 100){
    totalDiscount -= 5;
}

price -= (price * (totalDiscount / 100));

alert(`Your total discount is ${totalDiscount}% and your total price is $${price}.`)

/* EJERCICIO 5 ****************************************************************************

Pseudocode:

Begin
    Ask for birth year
    Ask for current year
    Ask if birthday has passed this year

    If they are below 18
        You are a child
    If they are from 18 to 30
        You are a young adult
    If they are from 30 to 59
        You are an adult
    If they are 60 or older
        You are a senior citizen
End

******************************************************************************************/


let birthYear = parseInt(prompt("Enter your birth year: "));
let currentYear = parseInt(prompt("Enter the current year: "));
let birthdayPassed = prompt("Has your birthday passed this year? (Yes or No)")

let age = currentYear - birthYear - 1;
if(birthdayPassed === "yes" || birthdayPassed === "Yes"){
    age += 1;
}

if(age >= 0 && age < 18){
    alert(`You are ${age} years old and a child`);
} else if(age < 31){
    alert(`You are ${age} years old and a young adult`);
} else if(age < 60){
    alert(`You are ${age} years old and an adult`);
} else if(age < 123){
    alert(`You are ${age} years old and a senior citizen`);
} else {
    alert("Invalid Age");
}
















