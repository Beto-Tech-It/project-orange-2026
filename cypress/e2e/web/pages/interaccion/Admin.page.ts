export class AdminPage {

      validarOpcion(opcion : string) {
     cy.fixture("sidebarprincipal").then((elements) => {
            cy.get(elements.first_level).should("exist").and("be.visible").contains(opcion).click();
        });
    }

    registrarUsuarioNuevo() {
        // Lógica para registrar un nuevo usuario en la página de Admin
        
    cy.fixture("interaccion/Admin").then((elements) => {

        cy.get(elements.UserAdmin).eq(1).type("Humberto2026").wait(2000);


    })

}} ;