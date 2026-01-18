import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SidebarPrincipalPage } from "../../pages/sidebar/sidebarprincipal.page";
import { LoginPage } from "../../pages/login/login.page";

const loginPage = new LoginPage();
const sidebarLateral = new SidebarPrincipalPage();

Given("que el usuario se encuentra en la página de login", () => {
    loginPage.visit();
});

When("ingresa el username {string} y la contraseña {string}", (username:string, password:string) => {

    loginPage.ingresarCredenciales(username, password);

});

When("que el usuario se da click en la opcion {string} del menu lateral principal", (opcion:string) => {
    sidebarLateral.validarOpcionesMenu(opcion);
});

