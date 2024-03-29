const HomePage = require ('./pages/homePage.js');
const RegisterPage = require('./pages/registrationPage.js');

describe('Проверка тестового задания - форма регистрации', function () {
   // This code will run before each test case and it prevent redirection to the new page after successful registration
   beforeEach(() => {
     browser.url('http://hr2test.dev-bitrix.by/');
     let button = $('//*[@type = "submit"]');
       browser.execute((el) => {
         el.addEventListener('click', (e) => {
         e.preventDefault();
         window.location.href = window.location.href;
         });
       }, button);
 });
    it('Открыта домашняя страница', async function () {
        await HomePage.open();
    });
    it('Все поля заполнены действительными данными', async function () {
        await RegisterPage.allDataValid();
     });
    it("Проверить обязательность всех полей", async() => {
        await RegisterPage.registerButton.click();
    });
    it("Оставить поле логин незаполненным и отправить форму", async() => {
        await RegisterPage.emptyLogin();
        await RegisterPage.registerButton.click();
    });
    it("Проверить валидность длины логина", async() => {
       await RegisterPage.loginLess6char();
       await RegisterPage.registerButton.click();
    });
   it("Проверить ввод логина с пробелами между/в начале /в конце символов", async() => {
      await RegisterPage.spacesInLogin();
   });
   it("Проверить отправку формы уже зарегистрированного логина в БД", async() => {
      await RegisterPage.notUniqueLogin();
      await RegisterPage.registerButton.click();
   });
   it("Оставить поле пароль пустым", async() => {
      await RegisterPage.emptyPassword();
      await RegisterPage.registerButton.click();
   });
   it("Проверить валидность длины пароля (мин 6 символов)", async() => {
      await RegisterPage.passwordLess6char();
      await RegisterPage.registerButton.click();
   });
   it("Проверить ввод валидного пароля (*цифры + буквы)", async() => {
      await RegisterPage.passwordOnlyLetters();
      await RegisterPage.registerButton.click();
   });
     it("Проверить ввод пароля с пробелом между/ в начале / в конце / символов", async() => {
        await RegisterPage.spacesInPassword();
     });
     it("Проверить ввод валидного (цифры+буквы) пароля + спец.символы", async() => {
        await RegisterPage.passwordAndSymbols();
        await RegisterPage.registerButton.click();
     });
     it("Проверить отправку пароля только из пробелов в поле", async() => {
        await RegisterPage.onlySpacesInPassword();
        await RegisterPage.registerButton.click();
     });
     it("Проверить ввод пароля отличного от пароля в поле password", async() => {
        await RegisterPage.passwordDifferent();
        await RegisterPage.registerButton.click();
     });
     it("Оставить поле email незаполненным и попытаться отправить форму", async() => {
        await RegisterPage.emptyEmail();
        await RegisterPage.registerButton.click();
     });
     it("Проверить ввод адреса с двойным символом @ (admin@@mail.ru)", async() => {
        await RegisterPage.emailWithDoubleAA();
        await RegisterPage.registerButton.click();
     });
     it("Проверить ввод адреса с пробелами между/в начале /в конце символов", async() => {
        await RegisterPage.spacesInEmail();
        await RegisterPage.registerButton.click();
     });
     it("Проверить ввод адреса без доменной части (admin@)", async() => {
        await RegisterPage.emailWithoutDomain();
        await RegisterPage.registerButton.click();
     });
     it("Проверить ввод адреса без точки в доменной части (admin@mailru)", async() => {
        await RegisterPage.emailWithoutDot();
        await RegisterPage.registerButton.click();
     });
     it("Проверить ввод адреса уже зарегистрированного в БД", async() => {
        await RegisterPage.emailNotUnique();
        await RegisterPage.registerButton.click();
     });
     it("Оставить поле имя незаполненным и отправить форму", async() => {
      await RegisterPage.emptyName();
      await RegisterPage.registerButton.click();
   });
   it("Проверить валидность длины имени (мин 2 символа)", async() => {
      await RegisterPage.nameLess2char();
      await RegisterPage.registerButton.click();
   });
   it("Проверить ввод имени с пробелами между букв", async() => {
      await RegisterPage.nameSpaceBetween();
      await RegisterPage.registerButton.click();
   });
   it("Проверить ввод имени с пробелами в начале букв", async() => {
      await RegisterPage.nameSpaceBefore();
      await RegisterPage.registerButton.click();
   });
   it("Проверить ввод имени с пробелами в конце букв", async() => {
      await RegisterPage.nameSpaceAfter();
      await RegisterPage.registerButton.click();
   });
   it("Проверить ввод имени только из пробелов", async() => {
      await RegisterPage.nameSpaceAfter();
      await RegisterPage.registerButton.click();
   });

});










