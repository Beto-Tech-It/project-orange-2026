Feature: Interaccion con la opcion Admin

Background:

    Given que el usuario se encuentra en la página de login
    When ingresa el username "Admin" y la contraseña "admin123"

Scenario: Usuario navega a la opcion Admin del menu lateral principal, para realizar las operativas del modulo Admin
    When que el usuario se da click en la opcion "Admin" del menu lateral principal total
    