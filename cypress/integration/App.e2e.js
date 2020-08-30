describe('App test 1', () => {
    it('text in Navbar', () => {
        cy.visit('http://localhost:3000');

        cy.get('h6')
            .should('have.text', 'TestTask for Aionys');
    });
});


describe('App test 2', () => {
    it('click to add button with empty field', () => {
        cy.visit('http://localhost:3000');

        cy.contains('Add Note')
            .click();

        cy.wait(700);

        cy.get('div[class="Toastify__toast-body"]')
            .should('have.text', 'Empty input field');
    });
});

describe('App test 3', () => {
    it('switching language and check translation', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-cy="languageMenuButton"]')
            .click();

        cy.wait(100);

        cy.contains('Русский').
            click();

        cy.wait(1000);

        cy.get('h6')
            .should('have.text', 'Тестовое задание Aionys');
        cy.get('[data-cy="addButton"]')
            .should('have.text', 'Добавить заметку');
    });
});


describe('App test 4', () => {
    it('adding note', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-cy="addTextArea"]')
            .type('some test text');
        cy.contains('Add Note')
            .click();

        cy.wait(1000);

        cy.get('div[class="Toastify__toast-body"]')
            .should('have.text', 'Note is added');
    });
});

