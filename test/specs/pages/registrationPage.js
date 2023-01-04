const Page = require('./page.js');
class RegisterPage extends Page {

    //locators
    get registerPageLink() {return $('//*[text() = "Зарегистрируйтесь"]')}; // ссылка на стр. регистрации
    get loginField() {return $('//*[@id = "login"]')}; // поле логин
    get passwordField() {return $('//*[@id = "password"]')}; // поле пароль
    get confPasswordField() {return $('//*[@id = "password_confirm"]')}; // поле повторите пароль
    get emailField() {return $('//*[@id = "email"]')}; // поле эл. адрес
    get nameField() {return $('//*[@id = "name"]')}; // поле имя
    get registerButton() {return $('//*[@type = "submit"]')}; // кнопка "Зарегистрироваться"

    //actions
    async open () {
        await this.registerPageLink.click();
    };

    async allDataValid () {
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("user777@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("ssssss");
    };
    /////////////////////////////////////////////////////////////////////////////////////////// Поле логин
    async emptyLogin () {
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("user0200@mail.ru");
        await this.nameField.setValue("us");
    };

    async loginLess6char () {
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("user0201@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("users");
    };

    async spacesInLogin () {
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("user0203@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("wwww ww");
        await this.registerButton.click();
        await this.loginField.setValue("wwwwww ");
        await this.registerButton.click();
        await this.loginField.setValue(" wwwwww");
        await this.registerButton.click();
    };

    async notUniqueLogin () {
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("user0209@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("ssssss");
    };
    ////////////////////////////////////////////////////////////////////////////////////////////Поле пароль
    async emptyPassword () {
        await this.passwordField.setValue("");
        await this.confPasswordField.setValue("");
        await this.emailField.setValue("user020551@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("bbbbbb");
    };

    async passwordLess6char () {
        await this.passwordField.setValue("test1");
        await this.confPasswordField.setValue("test1");
        await this.emailField.setValue("user500@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("uuuuuu");
    };

    async passwordOnlyLetters () {
        await this.passwordField.setValue("testss");
        await this.confPasswordField.setValue("testss");
        await this.emailField.setValue("user501@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("oooooo");
    };

    async spacesInPassword () {
        await this.emailField.setValue("user503@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("pppppp");
        await this.passwordField.setValue(" tests1");
        await this.confPasswordField.setValue(" tests1");
        await this.registerButton.click();
        await this.passwordField.setValue("tests1 ");
        await this.confPasswordField.setValue("tests1 ");
        await this.registerButton.click();
        await this.passwordField.setValue("tes ts1");
        await this.confPasswordField.setValue("tes ts1");
        await this.registerButton.click();
    };

    async passwordAndSymbols () {
        await this.emailField.setValue("user505@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("hhhhhh");
        await this.passwordField.setValue("tests1@");
        await this.confPasswordField.setValue("tests1@");
    };

    async onlySpacesInPassword () {
        await this.emailField.setValue("user510@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("qqqwww");
        await this.passwordField.setValue("      ");
        await this.confPasswordField.setValue("      ");
    };
    ////////////////////////////////////////////////////////////////////////////////////////////Повторите пароль
    async passwordDifferent () {
        await this.emailField.setValue("user520@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("tttooo");
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests2");
    };
    ////////////////////////////////////////////////////////////////////////////////////////////Поле почта
    async emptyEmail () {
        await this.emailField.setValue("");
        await this.nameField.setValue("us");
        await this.loginField.setValue("mmmnnn");
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
    };
    async emailWithDoubleAA() {
        await this.emailField.setValue("admin@@mail.ru");
        await this.nameField.setValue("us");
        await this.loginField.setValue("dddfff");
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
    };
    async spacesInEmail() {
        await this.nameField.setValue("us");
        await this.loginField.setValue("lllvvv");
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("user550 @mail.ru");
        await this.registerButton.click();
        await this.emailField.setValue("user550@mail.ru ");
        await this.registerButton.click();
        await this.emailField.setValue(" user550@mail.ru");
        await this.registerButton.click();
    };
    async emailWithoutDomain() {
        await this.nameField.setValue("us");
        await this.loginField.setValue("yyyxxx");
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("admin@");
    };
    async emailWithoutDot() {
        await this.nameField.setValue("us");
        await this.loginField.setValue("zzzooo");
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("admin@mailru");
    };
    async emailNotUnique() {
        await this.nameField.setValue("us");
        await this.loginField.setValue("eeeddd");
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("user777@mail.ru");
    };

}

module.exports = new RegisterPage();

