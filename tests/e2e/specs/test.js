// jshint -W117
// https://docs.cypress.io/api/introduction/api.html

describe('Test completes survey', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  function validateFirstInfoPage() {
    cy.get('div.card-header > div').contains('Weekly survey')
    cy.get('div.card-body > p').contains('You will be asked some questions')
    cy.get('div > div.card-body > button').contains('Let\'s do it!')
  }

  it('Visits the app root url and check info', () => {
    validateFirstInfoPage()
  })
  it('completes test with sport F1 selected', () => {
    const qName = 'What is your name?'
    const name = 'John Doe'
    const qEmail = 'Your email'
    const email = 'john.doe@email.com'
    const invalidEmail = 'qwe@qwe'
    const qPreferredSport = 'Which sport do you prefer?'
    const preferredSport = 'Formula One'
    const qFavouriteTrack = 'Which is your favourite race track?'
    const favouriteTrack = 'Monaco'
    const qWannaBeContacted = 'Do you wish to be contacted in future?'
    const wannaBeContacted = 'Never'
    // fill form
    cy.get('div[data-cy="question"]').within(() => {
      // input name
      cy.get('[data-cy=btnNext]').click()
      cy.get('.card-title').contains(qName)
      cy.get('input[type="text"]')
        .type('JD').should('have.class', 'is-invalid')
        .type('{backspace}{backspace}')
        .type(name).should('have.class', 'is-valid')
      cy.get('button[data-cy="btnNext"]').click()
      // input email
      cy.get('.card-title').contains(qEmail)
      cy.get('.card-subtitle').contains('We won\'t send you anything without your approval')
      cy.get('input[type="email"]')
      .type(invalidEmail).should('have.class', 'is-invalid')
      .type('{backspace}'.repeat(invalidEmail.length))
      .type(email).should('have.class', 'is-valid')
      cy.get('button[data-cy="btnNext"]').click()
      // select sport F1
      cy.get('.card-title').contains(qPreferredSport)
      cy.get('select').select('formula-one')
      cy.get('[data-cy=btnNext]').click()
      // select favourite track
      cy.get('.card-title').contains(qFavouriteTrack)
      cy.get('select').select('monaco')
      cy.get('[data-cy=btnNext]').click()
      // wanna be contacted in future
      cy.get('.card-title').contains(qWannaBeContacted)
      cy.get('button#btnNo').click()
    })
    // check results
    cy.get('div[data-cy="summary"]').within(() => {
      cy.get('.card-title').contains('Thanks!')
      cy.get('.card-text').contains('Take a look at the results')
      const expectedResults = [
        [qName, name],
        [qEmail, email],
        [qPreferredSport, preferredSport],
        [qFavouriteTrack, favouriteTrack],
        [qWannaBeContacted, wannaBeContacted],
      ]
      // checking results on the page
      cy.get('div.list-group-item').each(($el, index) => {
        const [q, a] = expectedResults[index]
        cy.wrap($el).contains(q)
        cy.wrap($el).contains(a)
      })
      // resetting the form
      cy.get('button').click()
    })
    // after resetting the survey
    validateFirstInfoPage()
  })
})
