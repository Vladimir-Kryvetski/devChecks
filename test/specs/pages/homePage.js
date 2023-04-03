const Page = require ('./page.js');

class HomePage extends Page {
    
    async open () {
        await super.open('http://hr2test.dev-bitrix.by/');
    }
}

module.exports = new HomePage();

