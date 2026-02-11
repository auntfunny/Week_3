/************************************************************************************************** 

Program: ATM

Pseudocode:

Begin
    Print Welcome message
    Ask for credentials
        if right, end loop
        if wrong, add counter and return
    if more than three long tries, lock and end program
    if not 
        define inicial fund
        define daily transaction

            Ask for desired action
                switch
                    deposit
                        add desired amount to fund
                    withdrawal
                    check balance amount
                        if not allowed
                            send message of insufficient funds
                        check daily withdrawal amount
                        if not allowed
                            send message of daily limit
                        if allowed
                            subtract from fund
                            add to daily withdrawal amount
                    Show funds
                        Send a message with balance amount
                    Leave
                        End the loop
        Send a message to say goodbye to user

End

**************************************************************************************************/

let username = prompt("Welcome! Please enter your username: ");
let password = prompt("Please enter your password: ");
let tries = 1;

while(((username !== "Funval" && username !== "funval") || password !== "Progra123") && tries < 4){
    if(tries < 3){
        alert(`Invalid Credentials, you have ${3-tries} attempts left.`);
        username = prompt("Please enter your username: ");
        password = prompt("Please enter your password: ");
        tries++;
    }else {
        alert("Too many atempts, try again later.");
        tries++;
    } 
}

if(tries < 4){
    const DAILYLIMIT = 200;
    let balance = 1000;
    let dailyTransaction = 0;
    let action = parseInt(prompt(`Welcome! Please choose an option:
        1. Deposit
        2. Withdraw
        3. Show balance
        4. Leave`)) ;

    while(action !== 4){
        switch(action){
            case(1):
                balance += Number(prompt("Please enter deposit amount"));
                break;
            case(2):
                let withdrawalAmount = Number(prompt("Please enter withdrawal amount:"))
                if(withdrawalAmount > balance ){
                    alert("Insufficient funds");
                } else if((dailyTransaction + withdrawalAmount) > DAILYLIMIT){
                    alert("You have exceeded the daily limit.");
                } else {
                    balance -= withdrawalAmount;
                    dailyTransaction += withdrawalAmount;
                }
                break;
            case(3):
                alert(`Your total balance is ${balance}.`)
                break;
            default:
                alert("Invalid option. Choose a different option.");      
        }
        action = parseInt(prompt(`Please choose another option:
        1. Deposit
        2. Withdraw
        3. Show balance
        4. Leave`)) ;
    }
    alert("Thank you for visiting the ATM today!")
}