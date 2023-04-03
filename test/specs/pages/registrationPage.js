const Page = require('./page.js');
class RegisterPage extends Page {

    //locators
    get loginField() {return $('//*[@name = "login"]')}; // поле логин
    get passwordField() {return $('//*[@name = "password"]')}; // поле пароль
    get confPasswordField() {return $('//*[@name = "confirmpassword"]')}; // поле повторите пароль
    get emailField() {return $('//*[@name = "email"]')}; // поле эл. адрес
    get nameField() {return $('//*[@name = "username"]')}; // поле имя
    get registerButton() {return $('//*[@type = "submit"]')}; // кнопка "Зарегистрироваться"

    //actions
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
    ////////////////////////////////////////////////////////////////////////////////////////////Поле имя
    async emptyName() {
        await this.nameField.setValue("");
        await this.loginField.setValue("iiiiiiooo");
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("useriiiiiiooo@mail.ru");
    };

    async nameLess2char() {
        await this.nameField.setValue("g");
        await this.loginField.setValue("kkkkkiiiiii");
        await this.passwordField.setValue("tests1");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("userkkkkkiiiiii@mail.ru");
    };

    async nameSpaceBetween() {
        await this.nameField.setValue("g g");
        await this.loginField.setValue("cccccxxx");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("usercccccxxx@mail.ru");
    };
    async nameSpaceBefore() {
        await this.nameField.setValue("  gg");
        await this.loginField.setValue("wwwvvvw");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("userwwwvvvw@mail.ru");
    };

    async nameSpaceAfter() {
        await this.nameField.setValue("gg  ");
        await this.loginField.setValue("sssqqqss");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("usersssqqqss@mail.ru");
    };

    async nameOnlySpaces() {
        await this.nameField.setValue("   ");
        await this.loginField.setValue("qqqmmmm");
        await this.confPasswordField.setValue("tests1");
        await this.emailField.setValue("userqqqmmmm@mail.ru");
    };

}

module.exports = new RegisterPage();

