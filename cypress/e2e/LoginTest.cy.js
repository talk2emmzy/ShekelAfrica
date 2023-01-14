

describe('Login Test', () => {

it('verify that local dealer can login a valid ID and Password', () => {
cy.visit('https://frontendv2.shekel.africa/login')
cy.get("input[placeholder='Enter your email']").type('talk2emmzy@gmail.com')
cy.get("input[placeholder='Enter password']").type('123456789')
cy.get("button[name='Login']").click()

cy.get('.ant-notification-notice-message').should('have.text', 'Login Successfully')

})

it.only('verify that local dealer cannot login a invalid ID and Password', () => {
    cy.visit('https://frontendv2.shekel.africa/login')
    cy.get("input[placeholder='Enter your email']").type('talk2emmzy@gma')
    cy.get("input[placeholder='Enter password']").type('12')
    cy.get("button[name='Login']").click()
    
    cy.get('.ant-form-item-explain-error').should('have.text', 'Email must be a valid email')
    
    
    
    })

})

