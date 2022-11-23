const MyAccountPage = require('../pageobjects/myAccount.page')

beforeEach()
describe ('My account page', () => {
    it('Should be directed to my account page', async () => {
       await browser.url('https://magento.softwaretestingboard.com/customer/account/')
       
    }) 

}); 

beforeEach()
describe ('Navigate to Sales page', () => {
    it('Should be directed to sales page', async () => {
       await browser.url('https://magento.softwaretestingboard.com/sale.html')
       
    }) 

}); 

beforeEach()
describe ('Navigate to Jackets page', () => {
    it('Should be directed to jackets page', async () => {
       await browser.url('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
       
    }) 

}); 

beforeEach()
describe ('Navigate to Full Jackets page', () => {
    it('Should be directed to full jackets page', async () => {
       await browser.url('https://magento.softwaretestingboard.com/riona-full-zip-jacket.html')
       await expect(MyAccountPage.fullJacketPage).toHaveTextContaining('You need to choose')
       await expect(MyAccountPage.addToCartSuccessul).toHaveTextContaining('You added Riona Full Zip Jacket')
       
    }) 

}); 
