const fs = require('fs');
const path = require('path');

const relativePath = '../../../htdocs/testMaternDzenis/vendor/db.json'; 

const dataBase = fs.readFileSync(path.resolve(__dirname, relativePath))
.toString();
console.log(dataBase.match(/matern/g))
