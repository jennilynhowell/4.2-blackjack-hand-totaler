/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  var cardValue = 0;
  var hasAce = false;
  var handTotal = 0;

  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J') {
      cardValue = 10;
      handTotal += cardValue;
    } else if (hand[i] === 'A') {
      cardValue = 1;
      hasAce = true;
      handTotal += cardValue;
    } else {
      cardValue = parseInt(hand[i]);
      handTotal += cardValue;
    }

  }
  if (handTotal <= 11 && hasAce){
    handTotal += 10;
  }


  console.log(handTotal);

  return handTotal;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
