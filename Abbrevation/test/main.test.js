const mainTest =  require('../main')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
test('testing Input', () => {
    rl.question("Do you like PIzza", (input) => {
    })
  });
