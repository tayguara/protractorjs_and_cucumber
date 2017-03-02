Feature: Efetuar login no Sexlog com cucumber e protractor
  Com um usuário no Sexlog
  efetuo o login utilizando o protractor
  em seguida verifico o title e o titulo da livecam no Explorar

  Scenario: Sexlog com cucumber e protractor
    Given Eu acesso a página "https://sexlog.com/"
    When Efetuo o login
    Then Eu devo verificar se o texto do title no Explorar, está ok
    And verificar se o titulo da livecam no Explorar é "LIVECAM"
    Then Deslogar com o usuário
    And Fechar o browser