class Login
{

    
    setUserName(username)
    {
        cy.get("input[placeholder='Enter your email']").type(username)
    }

    setPassword(password)
    {
        cy.get("input[placeholder='Enter password']").type(password)
    }

    loginBtn()
    {
        cy.get('.ant-form > .ant-btn').click()
    }

    verifyLogin()
    {
        cy.get('.ant-notification-notice-message').should('have.text', 'Recaptcha verification failed')
    }




    setUserInvalidName(rInvalidUsername)
    {
        cy.get("input[placeholder='Enter your email']").type(InvalidUsername)
    }

    setInvalidPassword(InvalidPassword)
    {
        cy.get("input[placeholder='Enter password']").type(InvalidPassword)
    }

    loginBtn()
    {
        cy.get('.ant-form > .ant-btn').click()
    }

    verifyWrongLogin()
    {
        cy.get('.ant-notification-notice-message').should('have.text', 'Recaptcha verification faled')
    }

    
}

export default Login;