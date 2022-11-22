const SignUpPage = require('../pageobjects/signUp.page')
const { faker } = require('@faker-js/faker');


describe.skip ('Create an account', () => {
    it('Should sign up succesfully', async () => {
       await browser.url('https://magento.softwaretestingboard.com/')
       const email = await faker.internet.email(undefined,undefined,'gmail.com')
       await SignUpPage.signUp('Astro','Berry',email,'R6CtCTjf35vmYSL')
       await expect(SignUpPage.successfulSignUpMessage).toHaveTextContaining('Thank you for registering')
       
    }) 

}); 

describe.only ('Invalid password Sign up', () => {
    it('should login with invalid credentials', async () => {
       await browser.url('https://magento.softwaretestingboard.com/')
       const email = await faker.internet.email(undefined,undefined,'gmail.com')
       await SignUpPage.signUp('','Berry',email,'Lmnop123@')
       await expect(SignUpPage.incorrectFirstName).toHaveTextContaining('This is a required field')
       
    }) 

}); 
