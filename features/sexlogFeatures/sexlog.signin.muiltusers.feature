Feature: Multi login no Sexlog
  Com um grupo de usuário no Sexlog
  efetar o login com todos

  Scenario Outline: Sexlog multi parameter
    Given Eu acesso a página "SEXLOG_URL"
    When Inserir o "<login>" e "<password>"
    Then Eu devo verificar se o texto do title no Explorar, está ok
    And verificar se o titulo da livecam no Explorar é "LIVECAM"
    Then Deslogar com o usuário

    Examples:
      | login | password |
      | 1     | 1        |
      | 2     | 2        |
      | 3     | 3        |