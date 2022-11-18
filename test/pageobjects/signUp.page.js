class SignUpPage {

    get createAccountLink () {
        return $("header.page-header li:nth-child(3) a:nth-child(1)")
    }

    get firstNameInput () {
        return $('#firstname')
    }

    get lastNameInput () {
        return $('#lastname')
    }

    get emailInput () {
        return $('#email_address')
    }

    get passwordInput () {
        return $('#password')
    }

    get confirmPasswordInput () {
        return $('#password-confirmation')
    }

    get createAccountButton () {
        return $("//button[@title='Create an Account']")
    
    }

    get successfulSignUpMessage () {
        return $('.message-success div')
    
    }

   async signUp (fName, lName, email, password) {

      await this.createAccountLink.click()
      await this.firstNameInput.setValue(fName)
      await this.lastNameInput.setValue(lName)
      await this.emailInput.setValue(email)
      await this.passwordInput.setValue(password)
      await this.confirmPasswordInput.setValue(password)
      await this.createAccountButton.click()

   }


}

module.exports = new SignUpPage;