const checkOutCart = require('../pageobjects/checkOutCart.page')
const SignUpPage = require('../pageobjects/signUp.page')

describe ('Shipping', () => {
    it('Should display shipping page', async () => {
       await browser.url('https://magento.softwaretestingboard.com/checkout/#shipping')
       const country = await checkOutCart.country('Jamaica')
       await SignUpPage.signUp('Astro','Berry')
    }) 

}); 

