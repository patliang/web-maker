/// <reference types="cypress" />

describe('Modals pop-up when header btns are pressed', () => {
	beforeEach(() => {
		cy.init();
	});

	// Selectors for each button
	const ADD_LIBRARY_SEL = '[data-event-action=addLibraryButtonClick]';
	const NEW_SEL = '[aria-label="Start a new creation"]';
	const LOGIN_SEL = '[data-event-action=loginButtonClick]';

	it('Add Library', () => {
		cy.get(ADD_LIBRARY_SEL).click();
		cy.get('.modal__content').should('be.visible');
	});

	it('+ New', () => {
		cy.get(NEW_SEL).click();
		cy.get('.modal__content').should('be.visible');
	});

	it('Login/SignUp', () => {
		cy.get(LOGIN_SEL).click();
		cy.get('.modal__content').should('be.visible');
	});
});
