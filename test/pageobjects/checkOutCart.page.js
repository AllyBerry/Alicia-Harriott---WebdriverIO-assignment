class CheckOutCart {
 

    get cartImage () {
        return $('.action.showcart')
   }

   get proceedToCheckOutButton () {
    return $('#top-cart-btn-checkout')
}

get companyInput () {
    return $('#KRLL1JD')
}

get streetAddressInput () {
    return $('#A156PFF')
}

get cityInput () {
    return $('#J3LSQ6G')
}


get zipPostalCodeInput () {
    return $('#HYARGWP')
}


get countryDropDown () {
    return $('#S5IXN09')
}

get phoneNumberInput () {
    return $('#W9T43RR')
}

get shppingMethodradioButton () {
    return $("'input[value='flatrate_flatrate']'")
}

get nextButton () {
    return $('.button.action.continue.primary')
}




async myAccount ( company, address, city, zip, country, phone, ship_method) {

    await this.cartImage.click()
    await this.proceedToCheckOutButton.click()
    await this.companyInput.setValue(company)
    await this.streetAddressInput.setValue(address)
    await this.cityInput.setValue(city)
    await this.zipPostalCodeInput.setValue(zip)
    await this.countryDropDown.setValue(country)
    await this.phoneNumberInput.setValue(phone)
    await this.shppingMethodradioButton.setValue(ship_method)
    await this.nextButton.click()
    
 }



}



    

module.exports = new CheckOutCart;