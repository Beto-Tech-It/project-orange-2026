import{Given, When} from "@badeball/cypress-cucumber-preprocessor";
import { CredencialUnicaPage } from "../../pages/sidebar/sidebarprincipal.page";
import { LoginPage } from "../../pages/login/login.page";
import { AdminPage } from "../../pages/interaccion/Admin.page";

const credencialUnica = new CredencialUnicaPage();
const loginPage = new LoginPage();
const adminPage = new AdminPage();


// Given('que el usuario se encuentra en la página de login', () => {
//     loginPage.visit();
// });
// When("ingresa el username {string} y la contraseña {string}", (username:string, password:string) => {

//     credencialUnica.ingresarCredencialesUnicas(username, password);
// });

When("que el usuario se da click en la opcion {string} del menu lateral principal total", (opcion:string) => {
    adminPage.validarOpcion(opcion);
    adminPage.registrarUsuarioNuevo();
});