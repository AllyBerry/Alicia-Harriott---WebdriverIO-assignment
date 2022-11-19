const LogInPage = require('../pageobjects/logIn2.page');
const { faker } = require('@faker-js/faker');

describe.only('Invalid password Sign up', () => {
    it('should login with invalid credentials', async () => {
        await browser.url('https://magento.softwaretestingboard.com/customer/account/login')
        const email = await faker.internet.email(undefined,undefined,'gmail.com')
        await LogInPage.emailLoginInput(email,'12Man12@ley')
        await expect(LogInPage.unSuccessfulSignUpMessage).toHaveTextContaining('The account sign-in was incorrect')
        
    });
});