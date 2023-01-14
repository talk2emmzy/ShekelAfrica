
import Login from "../pageObjects/loginPage.js"

describe('Login Test', () => {

it('verify that local dealer can login a valid ID and Password', () => {
cy.visit('https://frontendv2.shekel.africa/login')

cy.fixture('testData').then((data)=>{

const ln=new Login();

ln.setUserName(data.emailId)
ln.setPassword(data.password)
ln.loginBtn();
ln.verifyLogin();

})

// cy.get("input[placeholder='Enter your email']").type('talk2emmzy@gmail.com')
// cy.get("input[placeholder='Enter password']").type('123456789')
// cy.get("button[name='Login']").click()

// cy.get('.ant-notification-notice-message').should('have.text', 'Login Successfully')

})

it('verify that local dealer cannot login a invalid ID and Password', () => {
    cy.visit('https://frontendv2.shekel.africa/login')

    cy.fixture('testData').then((data)=>{

        const ln=new Login();
        
        ln.setUserInvalidName(data.wrongEmailId)
        ln.setInvalidPassword(data.wrongPassword)
        ln.loginBtn();
        ln.verifyWrongLogin();
        
        })
    
    // cy.get("input[placeholder='Enter your email']").type('talk2emmzy@gma')
    // cy.get("input[placeholder='Enter password']").type('12')
    // cy.get("button[name='Login']").click()
    
    // cy.get('.ant-form-item-explain-error').should('have.text', 'Email must be a valid email')
    
    })

})

