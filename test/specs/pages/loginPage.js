const Page = require('./page.js');

class LoginPage extends Page {
    //локаторы
    get loginField() {return $('//*[@id = "login"]')};
    get passwordField() {return $('//*[@id = "password"]')};
    get submitBtn() {return $('//*[@type = "submit"]')};

    //данные
    async validLoginInvalidPass () {
        await this.loginField.setValue('ssssss');
        await this.passwordField.setValue('tests55555');
    };
 
    async notRegisteredLoginValidPass () {
        await this.loginField.setValue('notRegistered');
        await this.passwordField.setValue('tests1');
    };
    async emptyLoginValidPassword () {
        await this.loginField.setValue('');
        await this.passwordField.setValue('tests1');
    };
    async validPassRegiteredLogin () {
        await this.loginField.setValue('ssssss');
        await this.passwordField.setValue('tests1');
        await this.submitBtn.click();
        await browser.deleteCookies()
    };
    async invalidPassRegiteredLogin () {
        await this.loginField.setValue('ssssss');
        await this.passwordField.setValue('tes');
    };
}

module.exports = new LoginPage();
