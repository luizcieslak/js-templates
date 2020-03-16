/// <reference types="cypress" />

context('Testes automatizados!', () => {
	/*
  A solid test generally covers 3 phases:

    Set up the application state.
    Take an action.
    Make an assertion about the resulting application state.

    You might also see this phrased as “Given, When, Then”, or “Arrange, Act, Assert”. But the idea is: First you put the application into a specific state, then you take some action in the application that causes it to change, and finally you check the resulting application state.

    Today, we’ll take a narrow view of these steps and map them cleanly to Cypress commands:

    Visit a web page.
    Query for an element.
    Interact with that element.
    Assert about the content on the page.
  */

	beforeEach(() => {
		// Step 1: Visit a page
		cy.visit('localhost:3000')
	})

	it('clica no produto, adiciona ao carrinho e o remove', function() {
		cy.findAllByTestId('card-133453126').click()
		cy.findByText(/ADICIONAR AO CARRINHO/i).click()

		cy.findByTestId('snackbar').should('be.visible')

		cy.findAllByTestId('cart').click()
		cy.findAllByTestId('cart-remove-133453126').click()
	})

	it('clica no produto, adiciona ao carrinho ate acabar o estoque e o remove', function() {
		cy.findAllByTestId('card-133453126').click()

		for (let i = 0; i < 2; i++) {
			cy.findByText(/ADICIONAR AO CARRINHO/i).click()
			cy.findByTestId('snackbar').should('be.visible')
		}

		cy.findByTestId('button-addtocart').should('be.disabled')

		cy.findAllByTestId('cart').click()
		cy.findAllByTestId('cart-remove-133453126').click()
	})

	it('clica no produto, adiciona ao carrinho, incrementa a quantidade ate acabar e o remove', function() {
		cy.findAllByTestId('card-133453126').click()

		cy.findByText(/ADICIONAR AO CARRINHO/i).click()
		cy.findByTestId('snackbar').should('be.visible')

		cy.findAllByTestId('cart').click()

		for (let i = 0; i < 2; i++) {
			cy.findByTestId('cart-increment-133453126').click()
		}

		cy.findByTestId('cart-error-133453126').should('be.visible')

		cy.findAllByTestId('cart-remove-133453126').click()
	})

	it('clica no produto, adiciona ao carrinho ate acabar o estoque, diminui a quantidade e o remove', function() {
		cy.findAllByTestId('card-133453126').click()

		for (let i = 0; i < 2; i++) {
			cy.findByText(/ADICIONAR AO CARRINHO/i).click()
			cy.findByTestId('snackbar').should('be.visible')
		}

		cy.findByTestId('button-addtocart').should('be.disabled')

		cy.findAllByTestId('cart').click()
		cy.findByTestId('cart-decrement-133453126').click()

		cy.findByTestId('button-addtocart').should('be.enabled')

		cy.findAllByTestId('cart-remove-133453126').click()
	})
})
