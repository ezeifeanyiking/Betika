/// <reference types="cypress" />
const { Login } = require("../Pages/LoginClass.cy");

describe("login authentication in desktop view", () => {
  
  const login = new Login();
  beforeEach(() => {
    cy.setViewportSize('Desktop')
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.visit("https://www.betika.com/en-ke/login");
  });

  it("Verify user is able to login with valid credentials", () => {
    // cy.get('.session > .logo__image').realSwipe("toTop")
    login.dPhoneNumberField().scrollIntoView().focus().type("0743551248");
    login.dPasswordField().scrollIntoView().focus().type("1234");
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .dNotificationMsg()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal("Logged in successfully");
      });

    login
      .dNotificationTitle()
      .should("be.visible")
      .invoke("text")
      .then((title) => {
        expect(title).to.equal("Success");
      });

    cy.wait(3000);
    cy.url().should("not.include", "login");
  });

  it("Verify user is unable to login with invalid mobile number", () => {
    login.dPhoneNumberField().scrollIntoView().focus().type("1743551248");
    login.dPasswordField().scrollIntoView().focus().type("1234");
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .dNotificationMsg()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal("Invalid mobile number");
      });

    login
      .dNotificationTitle()
      .should("be.visible")
      .invoke("text")
      .then((title) => {
        expect(title).to.equal("Login failed");
      });
  });

  it("Verify user is unable to login with invalid password", () => {
    login.dPhoneNumberField().scrollIntoView().focus().type("0743551248");
    login.dPasswordField().scrollIntoView().focus().type("0234");
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .dNotificationMsg()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal(
          "The mobile and password provided do not match"
        );
      });

    login
      .dNotificationTitle()
      .should("be.visible")
      .invoke("text")
      .then((title) => {
        expect(title).to.equal("Login failed");
      });
  });

  it("Verify user is unable to login when phonenumber field is empty", () => {
    login.dPasswordField().scrollIntoView().focus().type("1234");
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .phoneNumberTextError()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal("Please enter a phone number");
      });
  });

  it("Verify user is unable to login when password field is empty", () => {
    login.dPhoneNumberField().scrollIntoView().focus().type("0743551248");
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .passwordTextError()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal("Please enter a password");
      });
  });

  it("Verify user is unable to login when phone number and password fields are empty", () => {
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .phoneNumberTextError()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal("Please enter a phone number");
      });
  });
});
// -------------------------------------------------------
describe("login authentication in desktop view", () => {
  
  const login = new Login();
  beforeEach(() => {
    cy.setViewportSize('mobile')
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.visit("https://www.betika.com/en-ke/login");
  });

  it("Verify user is able to login with valid credentials", () => {
    // cy.get('.session > .logo__image').realSwipe("toTop")
    login.dPhoneNumberField().scrollIntoView().focus().type("0743551248");
    login.dPasswordField().scrollIntoView().focus().type("1234");
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .dNotificationMsg()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal("Logged in successfully");
      });

    login
      .dNotificationTitle()
      .should("be.visible")
      .invoke("text")
      .then((title) => {
        expect(title).to.equal("Success");
      });

    cy.wait(3000);
    cy.url().should("not.include", "login");
  });

  it("Verify user is unable to login with invalid mobile number", () => {
    login.dPhoneNumberField().scrollIntoView().focus().type("1743551248");
    login.dPasswordField().scrollIntoView().focus().type("1234");
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .dNotificationMsg()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal("Invalid mobile number");
      });

    login
      .dNotificationTitle()
      .should("be.visible")
      .invoke("text")
      .then((title) => {
        expect(title).to.equal("Login failed");
      });
  });

  it("Verify user is unable to login with invalid password", () => {
    login.dPhoneNumberField().scrollIntoView().focus().type("0743551248");
    login.dPasswordField().scrollIntoView().focus().type("0234");
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .dNotificationMsg()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal(
          "The mobile and password provided do not match"
        );
      });

    login
      .dNotificationTitle()
      .should("be.visible")
      .invoke("text")
      .then((title) => {
        expect(title).to.equal("Login failed");
      });
  });

  it("Verify user is unable to login when phonenumber field is empty", () => {
    login.dPasswordField().scrollIntoView().focus().type("1234");
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .phoneNumberTextError()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal("Please enter a phone number");
      });
  });

  it("Verify user is unable to login when password field is empty", () => {
    login.dPhoneNumberField().scrollIntoView().focus().type("0743551248");
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .passwordTextError()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal("Please enter a password");
      });
  });

  it("Verify user is unable to login when phone number and password fields are empty", () => {
    login.dClickBtn().scrollIntoView().click({force: true});
    login
      .phoneNumberTextError()
      .should("be.visible")
      .invoke("text")
      .then((message) => {
        expect(message).to.equal("Please enter a phone number");
      });
  });
});