/// <reference types="cypress" />

class Login {
    dPhoneNumberField() {
        return cy.get('.session__form__phone > .input');
    }

    dPasswordField() {
        return cy.get('.session__form__password__container > .input__container > .input');
    }

    dClickBtn() {
        return cy.get('.session__form__button__container > .button > span')
    }

    dNotificationTitle() {
        return cy.get('.title')
    }

    dNotificationMsg() {
        return cy.get(".message")
    }

    // dDepositBtn() {
    //     return cy.get('.top-session-button')
    // }

    phoneNumberTextError() {
        return cy.get('.session__form .text-error')
    }

    passwordTextError() {
        return cy.get('.session__form__password__container .text-error')
    }
}

module.exports = { Login }