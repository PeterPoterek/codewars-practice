// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

//Solution
function rentalCarCost(d) {
  let result = 0;
  if (d < 3) {
    result = d * 40;
    console.log(result);
    return result;
  }
  if (d >= 3 && d < 7) {
    result = d * 40 - 20;
    console.log(result);
    return result;
  }
  if (d >= 7) {
    result = d * 40 - 50;
    console.log(result);
    return result;
  }
}

rentalCarCost(1); //40
rentalCarCost(2); //80
rentalCarCost(3); //100
rentalCarCost(5); //180
rentalCarCost(7); //230
rentalCarCost(10); //350
