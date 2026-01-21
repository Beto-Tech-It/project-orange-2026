export class CredencialUnicaPage {
   

    ingresarCredencialesUnicas(username: string, password: string) {
        // Lógica para ingresar credenciales en la página del sidebar principal
    
    cy.fixture("login").then((elements) => {
            
            cy.get(elements.login_user).type(username);
            cy.get(elements.psw_user).type(password);
            cy.get(elements.button_click).click().wait(2000);

    })
}}

export class SidebarPrincipalPage {

validarOpcionesMenu(opcion: string) {
     cy.fixture("sidebarprincipal").then((elements) => {
            cy.get(elements.first_level).should("exist").and("be.visible").contains(opcion).click().wait(2000);
        });
    }

}