


describe('Acessar o site e validar o texto de apresentação', () => {
    it('Acessar o site', () => {

        cy.visit('https://agapito-server.herokuapp.com/')

    });


    it('Validar texto', () => {

        cy.contains('Este é o site do Prof. Robson Agapito')

    });

    it('Validar criação de novo usuário', () => {
        cy.get('#users').click()
        cy.get('#btn-new').click()
        cy.get('#user_login').type('mateus')
        cy.get('#user_full_name').type('mateus meneses')
        cy.get('#user_email').type('mateusmenedddsesss@gmail.com')
        cy.get('#user_age').type('20')
        cy.get('#btn-save').click()
        cy.get('#notice').should('contain', 'Usuário foi criado com sucesso.')


    });

    it('Validar usuário novo', () => {
        cy.get('#email').should('contain', 'mateusmenedddsesss@gmail.com')
        cy.get('#full_name').should('contain', 'mateus meneses')
        cy.get('#login').should('contain', 'mateus')
        cy.get('#age').should('contain', '20')

    });


});
