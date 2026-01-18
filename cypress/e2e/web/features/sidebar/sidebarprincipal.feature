Feature: Navegación del menu lateral principal

  Scenario Outline: Usuario navega por las opciones del menu lateral principal
    Given que el usuario se encuentra en la página de login
    When ingresa el username "<username>" y la contraseña "<password>"
    When que el usuario se da click en la opcion "<opcion>" del menu lateral principal

    Examples:
      | username | password | opcion      |
      | Admin    | admin123 | Admin       |
      | Admin    | admin123 | PIM         |
      | Admin    | admin123 | Leave       |
      | Admin    | admin123 | Time        |
      | Admin    | admin123 | Recruitment |
      | Admin    | admin123 | My Info     |
      | Admin    | admin123 | Performance |
      | Admin    | admin123 | Dashboard   |
      | Admin    | admin123 | Directory   |
      | Admin    | admin123 | Maintenance |
      | Admin    | admin123 | Claim       |
      | Admin    | admin123 | Buzz        |
