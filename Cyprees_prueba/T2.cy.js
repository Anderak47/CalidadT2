
describe('Login', () => {
  it('Visit Login', () => {
    cy.visit(Cypress.env('base_url')+'/Auth/Login?ReturnUrl=%2FBiblioteca')
    cy.get('input[name="Username"]').type('admin')
    cy.get('input[name="Password"]').type('admin')
    cy.get('button[class="btn btn-primary"]').click()
    
    //1
    cy.visit(Cypress.env('base_url')+'/Libro/Details?id=2')
    cy.get('textarea[name="Texto"]').type('Muy buena pelicula harry poter')
    cy.get('input[name="Puntaje"]').type('4')
    cy.get('button[class="btn btn-primary"]').click()

    //2
    cy.visit(Cypress.env('base_url')+'/Libro/Details?id=4')
    cy.get('textarea[name="Texto"]').type('Muy buena pelicula harry poter la camara secreta')
    cy.get('input[name="Puntaje"]').type('4')
    cy.get('button[class="btn btn-primary"]').click()

    //3
    cy.visit(Cypress.env('base_url')+'/Libro/Details?id=5')
    cy.get('textarea[name="Texto"]').type('Exelente en lo personal pero le falto mas accion Harry poter y el prisionero de alakazam')
    cy.get('input[name="Puntaje"]').type('3')
    cy.get('button[class="btn btn-primary"]').click()

    //4
    cy.visit(Cypress.env('base_url')+'/Libro/Details?id=6')
    cy.get('textarea[name="Texto"]').type('En lo personal no me gusto Harry Poter y el cadiz de fuego')
    cy.get('input[name="Puntaje"]').type('2')
    cy.get('button[class="btn btn-primary"]').click()

     //5
     cy.visit(Cypress.env('base_url')+'/Libro/Details?id=7')
     cy.get('textarea[name="Texto"]').type('Muy buena pelicula Harry Poter y la orden del Fenix')
     cy.get('input[name="Puntaje"]').type('5')
     cy.get('button[class="btn btn-primary"]').click()
 
     //6
     cy.visit(Cypress.env('base_url')+'/Libro/Details?id=8')
     cy.get('textarea[name="Texto"]').type('Muy buena pelicula Harry Poter y el misterio del principe')
     cy.get('input[name="Puntaje"]').type('4')
     cy.get('button[class="btn btn-primary"]').click()

    //7
     cy.visit(Cypress.env('base_url')+'/Libro/Details?id=9')
     cy.get('textarea[name="Texto"]').type('Muy mala pelicula Harry Poter y las reliquias de la muerte')
     cy.get('input[name="Puntaje"]').type('3')
     cy.get('button[class="btn btn-primary"]').click()

     //8
     cy.visit(Cypress.env('base_url')+'/Libro/Details?id=10')
     cy.get('textarea[name="Texto"]').type('Muy buena pelicula Harry Poter y el legado maldito')
     cy.get('input[name="Puntaje"]').type('5')
     cy.get('button[class="btn btn-primary"]').click()

    cy.visit(Cypress.env('base_url')+'/Biblioteca')
    //cy.get('a[class="nav-link text-dark"]')
    //cy.visit(Cypress.env('base_url'))
    //cy.get('.btn btn-primary').click
  })
})
