Feature: Proceso de Login en la aplicacion OrangeHRM

  Scenario: Validar el proceso de login exitoso
    Given que el usuario se encuentra en la pagina de login
    When el usuario ingresa el username "Admin" y la contraseña "admin123"
    Then el usuario deberia ver el dashboard

  Scenario Outline: Validar el proceso de login con diferentes casuisticas erroneas
    Given que el usuario se encuentra en la pagina de login
    When el usuario ingresa el username "<username>" y la contraseña "<password>"
    Then el usuario no debería acceder al dashboard

    Examples:
      | username   | password   |
      | incorrecta | incorrecta |
      | Admin      | incorrecta |
      | incorrecta | admin123   |
      | vacio      | admin123   |
      | Admin      | vacio      |
      | vacio      | vacio      |
