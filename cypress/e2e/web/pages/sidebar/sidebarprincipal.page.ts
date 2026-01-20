export class LoginPage {
    visit() {
        cy.visit('/web/index.php/dashboard/index');
    }


    ingresarCredenciales(username: string, password: string) {
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
            //cy.get(elements.first_level).should("exist").and("be.visible").contains(opcion).click().wait(2000);
            cy.get(elements.first_level).should("exist").and("be.visible").invoke("text").then((texto) => {
                if(texto.includes(opcion)){
                    cy.contains(opcion).click().wait(2000);
                }
            }
        );
    });
 }

}