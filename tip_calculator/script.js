// #1 ID 👉 'billTotalInput' = User input for bill total
// #2 ID 👉 'tipInput' = User input for tip
// #3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
// #4 ID 👉 'perPersonTotal' = Total dollar value owed per person

// These are the 3 functions you must use 👇
// =========================================
// calculateBill()
// increasePeople()
// decreasePeople()

// giving a global access to all inputs and div.

const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

// Get Number Of People From Div 
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// Calculate the total bill per person.
const calculateBill = () => {

    // get bill from user and convert it into a number
    const bill = Number(billInput.value);

    //  convert the tip into percentage
    const tipPercentage = Number(tipInput.value) / 100

    // get the total tip amount
    const tipAmount = bill * tipPercentage;

    // calculate the total (tipAmount + bill)
    const total = tipAmount + bill;

    // calculate the per person have to pay
    const perPersonTotal = total / numberOfPeople;

    // Update the perPerson amount have to pay
    perPersonTotalDiv.innerText = `$ ${perPersonTotal.toFixed(2).toLocaleString('en-US')}`

    // toLocaleString for specifying units such as unit,ten,thousand,lakh and so on
    // perPersonTotal.toFixed(2) to give the limit of number of decimal 

}

const increasePeople = () => {

    // increment the number of people'
    numberOfPeople += 1

    // update with the new number of people based on a user increment
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the number of people
    calculateBill()
}

const decreasePeople = () => {

    // if amount is simply 1 or less simply return or you cannot decrease the number of people less than 1

    if (numberOfPeople <= 1) {
        return
    }

    // decrement the number of people
    numberOfPeople -= 1

    // update with the new number of people based on a user increment
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the number of people
    calculateBill()

}