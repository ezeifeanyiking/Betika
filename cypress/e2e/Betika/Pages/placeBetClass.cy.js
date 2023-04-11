/// <reference types="cypress" />

class PlaceBet {
    getLoginBtn() {
        return cy.get('.outline')
    }

    firtBet() {
        return cy.get(':nth-child(7) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(1) > .prebet-match__odd__odd-value')
    }

    secondBet() {
        return cy.get(':nth-child(8) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(1) > .prebet-match__odd__odd-value')
    }

    betSlip() {
        return cy.get('.nav__betslip')
    }

    dTotalOdd() {
        return cy.get(':nth-child(3) > .betslip__details__row__value')
    }

    placeABet() {
        return cy.get('.betslip__details__button__place > span')
    }

    insufficientFundsErr() {
        return cy.get('.account__section > .account__section__desc')
    }

    betAmount() {
        return cy.get('.input__container > .input')
    }

    dNotificationMsg() {
        return cy.get('.message')
    }

    dNotificationTitle() {
        return cy.get('.title')
    }
    // cy.get('.input__container > .input')
}

module.exports = {
    PlaceBet
}