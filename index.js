// Code your solutions in this file
function writeCards(arr, nameevnt) {
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    store.push(`Thank you, ${arr[i]}, for the wonderful ${nameevnt} gift!`);
  }
  return store;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(num) {
  for (let i = num; i > -1; ) {
    console.log(i--);
  }
}

countDown(20);
