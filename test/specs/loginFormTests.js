const HomePage = require ('./pages/homePage.js');
const LoginPage = require('./pages/loginPage.js');

describe('Проверка тестового задания - форма авторизации', function () {
    it('Открыта домашняя страница', async function () {
        await HomePage.open();
    });
    it('Проверить ввод валидного логина и невалидного password', async function () {
        await LoginPage.validLoginInvalidPass();
        await LoginPage.submitBtn.click();
    });
    it('Проверить ввод логина незарегистрированного в БД', async function () {
        await LoginPage.notRegisteredLoginValidPass();
        await LoginPage.submitBtn.click();
    });
    it('Оставить поле логин пустым и отправить форму (поле password заполнить валидными данными)', async function () {
        await LoginPage.emptyLoginValidPassword();
        await LoginPage.submitBtn.click();
    });
    it('Проверить ввод валидного пароля для зарегистрированного пользователя (валидного логина)', async function () {
        await LoginPage.validPassRegiteredLogin();
    });
    it('Проверить ввод невалидного пароля для зарегистрированного пользователя (валидного логина)', async function () {
        await LoginPage.invalidPassRegiteredLogin();
        await LoginPage.submitBtn.click();
    });

});
