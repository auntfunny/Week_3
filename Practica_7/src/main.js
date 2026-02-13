// PRACTICA CALIFICADA NUMERO 7

/*******************************************************************************************

Program: Multiple Triangle Area 
Purpose: Calculate the area of multiple triangles

Psuedocode:

Begin
    for
        ask for base
        ask for height
        if either is zero
            send message that it cannot be 0
            lower counter
        show area in console with area function
        repeat 3 times
End

********************************************************************************************/



for(let i = 0; i < 3; i++){
    let base = Number(prompt("Please enter triangle base:"));
    let height = Number(prompt("Please enter triangle height:"));
    if(base > 0 && !isNaN(base) && height > 0 && !isNaN(height)){
        console.log(calculateArea(base, height));
    } else {
        alert("Invalid input, please enter a valid number");
        i--;
    }
}

function calculateArea(base, height){
    return (base * height) / 2;
}



/*******************************************************************************************

Program: Convert Celciuus to Fahrenheit
Purpose: Ask for 5 temperatures and show conversions in the Console

Psuedocode:

Begin
    for
        ask for temperature
        if NaN
            alert user that it is invalid
        show in console
        repeat 5 times
End

********************************************************************************************/




for(let i = 0; i < 5; i++){
    let temp = Number(prompt("Please enter tempurature:"));
    if(!isNaN(temp)){
        console.log(calculateTemp(temp));
    } else {
        alert("Invalid input, please enter a number");
        i--;
    }
}

function calculateTemp(temp){
    return (temp * (9/5))+32;
}



/*******************************************************************************************

Program: Count vowels in a text
Purpose: Ask for 3 text and count the vowels

Psuedocode:

Begin
    for
        ask for a text
        count the vowels
            check each letter if it is a vowel and add counter
        send result to console
End

********************************************************************************************/



for(let i = 0; i < 3; i++){
    let str = prompt("Please enter a text:")
    console.log(countVowels(str));
}

function countVowels(str){
    let newStr = str.toLowerCase().split('');
    let counter = 0;
    for(let letter of newStr){
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
            counter++;
        }
    }
    return counter;
}




/*******************************************************************************************

Program: Even and Odd in a range
Purpose: Ask for a range and count even and odd numbers between

Psuedocode:

Begin
    ask for beginning
    ask for end
    function
        count from beginning to end, printing even or odd
End

********************************************************************************************/



for(let i = 0; i !== 1;){
    let beginning = parseInt(prompt("Please enter the beginning:"));
    let end = parseInt(prompt("Please enter the end:"));

    if(isNaN(beginning) || isNaN(end)){
        alert("Error. Please enter numbers.");
    } else {
        i = 1;
        evenOddRange(beginning, end);
    }
}


function evenOddRange(beginning, end){
    for(let i = beginning; i <= end; i++){
        if(i % 2 === 0){
            console.log("Even");
        } else {
            console.log("Odd");
        }
    }
}



/*******************************************************************************************

Program: Biggest number and sum
Purpose: Get 5 numbers, find the biggest, and sum the numbers

Psuedocode:

Begin
    ask for 5 numbers
    enter function
        find the largest
        find the sum
    send numbers to console
End

********************************************************************************************/
let numbers = [];
for(let i = 0; i < 5; i++){
    numbers.push(Number(prompt("Please enter a number: ")));
    console.log(numbers[i]);
    if(isNaN(numbers[i])){
        alert("Error. I said a NUMBER");
        i--;
    }
}
console.log(largestAndSum(numbers));


function largestAndSum(numbers){
    let largest = 0;
    let total = 0;

    for(let num of numbers){
        if(num > largest){
            largest = num;
        }
    }
    for(let num of numbers){
        total += num;
    }
    return {largest, total};
}