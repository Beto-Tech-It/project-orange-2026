Feature: Navegación del menu lateral principal

Background:

    Given que el usuario se encuentra en la página de login
    When ingresa el username "Admin" y la contraseña "admin123"

  Scenario Outline: Usuario navega por las opciones del menu lateral principal
    When que el usuario se da click en la opcion "<opcion>" del menu lateral principal

    Examples:
      | opcion      |
      | Admin       |
      | PIM         |
      | Leave       |
      | Time        |
      | Recruitment |
      | My Info     |
      | Performance |
      | Dashboard   |
      | Directory   |
      | Maintenance |
      | Claim       |
      | Buzz        |
