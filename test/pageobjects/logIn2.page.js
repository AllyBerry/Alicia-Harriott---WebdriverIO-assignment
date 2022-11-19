
class LoginInPage {
    get signInLink () {
        return $("//div[@class='panel header']//a[contains(text(),'Sign In')]")
    }

    get emailLoginInput () {
        return $('[name="login[username]"]')
    }

    get passwordLoginInput () {
        return $('[name="login[password]"]')
    }

    get signInButton () {
        return $('[id="send2"]')
    }

    get unSuccessfulSignUpMessage () {
        return $('.message-error.error.message')
    
    }


    async loginIn (email, password) {

        await this.signInLink.click()
        await this.emailLoginInput.setValue(email)
        await this.passwordLoginInput.setValue(password)
        await this.signInButton.click()
    
     }

     
}

module.exports = new LoginInPage();