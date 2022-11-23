const SignUpPage = require('../pageobjects/signUp.page');
const lumaSignUpData = require('../pageobjects/lumaSignUpData.page');
const { faker } = require('@faker-js/faker');


describe.skip ('My Sign Up application', () => {
    for( const record of lumaSignUpData)
    it('should sign up new customer', async () => {
       await browser.url('https://magento.softwaretestingboard.com/')
       const email = await faker.internet.email(undefined,undefined,'gmail.com')
       await SignUpPage.signUp('Astro','Berry',email,'R6CtCTjf35vmYSL')
       await expect(SignUpPage.successfulSignUpMessage).toHaveTextContaining('Thank you for registering')
       

        
    });
});