class MyAccountPage {

    get myAccountPage () {
        return $(".panel.header")
    }

    get saleLink () {
        return $("'a[id='ui-id-8'] span'")
    
    }

    get jacketLink () {
        return $("'body > div:nth-child(5) > main:nth-child(4) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)'")
    
    }

    get addJacketToCart () {
        return $("'body > div:nth-child(5) > main:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > ol:nth-child(1) > li:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(4) > span:nth-child(1)'")
    
    }

    get fullJacketPage () {
        return $("'body > div:nth-child(5) > main:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > ol:nth-child(1) > li:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(4) > span:nth-child(1)'")
    
    }
    
    get sizeButton () {
        return $('#option-label-size-143-item-169')
    
    }
    
    get colorButton () {
        return $('#option-label-color-93-item-51')
    
    }

    get addToCartButton () {
        return $("'button[id='product-addtocart-button'] span'")
    
    }
    
    get addToCartSuccessul () {
        return $("'div[data-bind='html: $parent.prepareMessageForHtml(message.text)']'")
   }

   async myAccount () {

      await this.myAccountPage.click()
      await this.saleLink.click()
      await this.jacketLink.click()
      await this.addJacketToCart.click()
      await this.sizeButton.click()
      await this.addToCartButton.click()
      
   }

}



module.exports = new MyAccountPage;
