export class LoginPage {
    visit() {   
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    }

   ingresarCredenciales(username: string, password: string) {
    cy.fixture("login").then((elements) => {
        // Solo escribir username si NO está vacío
        if (username !== '') {
            cy.get(elements.login_user).type(username);
        }
        
        // Solo escribir password si NO está vacío
        if (password !== '') {
            cy.get(elements.psw_user).type(password);
        }
        
        // Siempre hacer click en el botón
        cy.get(elements.button_click).click().wait(2000);
    });
}
}


