import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../pages/login/login.page';

const loginPage = new LoginPage();

Given('que el usuario se encuentra en la pagina de login', () => {
    // Implementar la lógica para navegar a la página de login
  loginPage.visit();
});

When('el usuario ingresa el username {string} y la contraseña {string}', (username: string, password: string) => {
        // Implementar la lógica para ingresar las credenciales
   // Convertir "vacio" a string vacío
    const user = username === 'vacio' ? '' : username; // Convertir "vacio" a string vacío - operador ternario
    const pass = password === 'vacio' ? '' : password; // Convertir "vacio" a string vacío - operador ternario
    
    loginPage.ingresarCredenciales(user, pass);
});

Then('el usuario deberia ver el dashboard', () => {
    // Validar que el login fue exitoso
    cy.url().should('include', '/web/index.php/dashboard/index').wait(2000);
});
Then('el usuario no debería acceder al dashboard', () => {
    // Validar que NO llegó al dashboard
    cy.url().should('not.include', '/dashboard/index');
    // Opcional: validar mensaje de error
    // cy.get('.error-message').should('be.visible');
});