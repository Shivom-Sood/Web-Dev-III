const fs = require('fs');

console.log('1. Program started');
console.log('CLI inputs:', process.argv.slice(2));

console.log('2. Before synchronous read');
const syncData = fs.readFileSync('calculator.js', 'utf-8');
console.log('3. After synchronous read - got', syncData.length, 'characters');

console.log('4. Before asynchronous read');
fs.readFile('calculator.js', 'utf-8', (err, asyncData) => {
  if (err) return console.log('Error:', err.message);
  console.log('6. Asynchronous read finished - got', asyncData.length, 'characters');
});
console.log('5. After async call - program did not wait');