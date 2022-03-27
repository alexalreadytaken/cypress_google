//@ts-check
///<reference types="cypress-xpath"/>

it('Just search something',()=>{
    let query: string = 'hello google'

    cy.visit('https://google.com')

    cy.get('input[name="q"]')
        .type(query)

    cy.get('form[action="/search"]')
        .submit()

    cy.get(`input[value="${query}"]`)
        .should('exist')
})