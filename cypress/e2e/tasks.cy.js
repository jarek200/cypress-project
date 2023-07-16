describe('tasks management', () => {
  it('should open and close the new task modal', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Add Task').click()
    // cy.get('.backdrop').click({ force: true })
    // cy.get('body').click(10, 10)
    // cy.get('.backdrop').should('not.exist')
    // cy.get('.modal').should('not.exist')
    // cy.get('button').contains('Cancel').click()
    cy.get('.actions button:contains("Cancel")').click()
  })

  it('should add a new task', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Add Task').click()
    cy.get('#title').type('New Task')
    cy.get('#summary').type('some description')
    cy.get('.modal').contains('Add Task').click()
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')
    cy.get('.task').should('have.length', 1)
    cy.get('.task').contains('New Task')
    cy.get('.task p').contains('some description')
  })
  it('should filter tasks', () => {
    cy.visit('http://localhost:5173/') // visit the page
    cy.contains('Add Task').click() // click on the add task button
    cy.get('#title').type('New Task') // type in the title
    cy.get('#summary').type('some description') // type in the summary
    cy.get('#category').select('urgent') // select the category
    cy.get('.modal').contains('Add Task').click() // click on the add task button
    cy.get('.task').should('have.length', 1) // check that there is one task
    cy.get('#filter').select('moderate') //
    cy.get('.task').should('have.length', 0)
    cy.get('#filter').select('urgent')
    cy.get('.task').should('have.length', 1)
    cy.get('#filter').select('all')
    cy.get('.task').should('have.length', 1)
  })
})
