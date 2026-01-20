Feature: Interaccion con la opcion Performance

Scenario: Usuario navega a la opcion Performance del menu lateral principal, para realizar las operativas del modulo seleccionado.
    Given que el usuario se encuentra en la página de login
    When ingresa el username "Admin" y la contraseña "admin123"
    When que el usuario se da click en la opcion "Performance" del menu lateral principal