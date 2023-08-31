
import Login from "../pageObjects/loginPage.js"

describe('Login Test', () => {

it('verify that local dealer can login a valid ID and Password', () => {
        cy.visit('')

        cy.fixture('testData').then((data)=>{

        const ln=new Login();

        ln.setUserName(data.emailId)
        ln.setPassword(data.password)
        ln.loginBtn();
        ln.verifyLogin();

        })

    })


it('verify that local dealer cannot login a invalid ID and Password', () => {
        cy.visit('')

        cy.fixture('testData').then((data)=>{

            const ln=new Login();
            
            ln.setUserInvalidName(data.wrongEmailId)
            ln.setInvalidPassword(data.wrongPassword)
            ln.loginBtn();
            ln.verifyWrongLogin();
            
            })
    
     })

})

