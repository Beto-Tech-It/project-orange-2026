export class LoginPage {
    visit() {   
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    }

   ingresarCredenciales(username: string, password: string) {
    cy.fixture("login").then((elements) => {
        // Solo escribir username si NO está vacío

        if(username === 'vacio'){
            username = '';
        } else {
            cy.get(elements.login_user).type(username);
        }

        if(password === 'vacio'){
            password = '';
        } else {
            cy.get(elements.psw_user).type(password);
        }
        cy.get(elements.button_click).click().wait(2000);


        // const user = username === 'vacio' ? '' : username; // Convertir "vacio" a string vacío - operador ternario
        // const pass = password === 'vacio' ? '' : password; // Convertir "vacio" a string vacío - operador ternario
       
        // Siempre hacer click en el botón
        
    });
}
}


