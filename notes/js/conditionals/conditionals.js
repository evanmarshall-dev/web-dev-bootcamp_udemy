// Example conditional - IF Statement.
const rating = 3;

if (rating === 3) {
  console.log('You rock!');
}

// Example 2.
const onePlus = 1 + 1 === 2;

if (onePlus) {
  console.log('Your math is great!');
}

// Example 3, If/Else Statement.
const rando = Math.random();

if (rando <= 0.5) {
  console.log('Your number is less than 0.5!');
} else {
  console.log('Your number is greater than 0.5!');
}
// Write rando output after if block to avoid redundancy.
console.log(rando);

// Example 4, Else if Statement.
// You can chain together as many else if statements as you want. You can also end with an else statement.
// You can compare to lowercase to eliminate issues of case sensitivity.
const dayOfWeek = prompt('Please enter a day of the week.').toLowerCase();

if (dayOfWeek === 'monday') {
  console.log('IFHM!!');
} else if (dayOfWeek === 'friday') {
  console.log('TGIF!!');
} else {
  console.log('Meh, just another day...');
}

// Nesting conditionals inside other conditionals
