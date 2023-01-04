const fs = require('fs');
const path = require('path');

const db = fs.readFileSync(path.resolve(__dirname, ''));

console.log(db)


