// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createBoard', (name) => {
    return cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl')+'/1/boards/?name='+name+'&key='+Cypress.env('trelloapi_key')+'&token='+Cypress.env('trelloapi_token')
    })

})

Cypress.Commands.add('createList', (idBoard) => {
    return cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl')+'/1/boards/'+idBoard+'/lists?name=myFirstList&key='+Cypress.env('trelloapi_key')+'&token='+Cypress.env('trelloapi_token')
    })
})

Cypress.Commands.add('createCard', (idList) => {
    return cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl')+'/1/cards?idList='+idList+'&key='+Cypress.env('trelloapi_key')+'&token='+Cypress.env('trelloapi_token')
    })
})

Cypress.Commands.add('deleteCard', (idCard) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.config('baseUrl')+'/1/cards/'+idCard+'?key='+Cypress.env('trelloapi_key')+'&token='+Cypress.env('trelloapi_token')
    })
})

Cypress.Commands.add('deleteBoard', (idBoard) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.config('baseUrl')+'/1/boards/'+idBoard+'?key='+Cypress.env('trelloapi_key')+'&token='+Cypress.env('trelloapi_token')
    })
})
