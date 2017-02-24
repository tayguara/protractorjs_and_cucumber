Feature: Multi login no Sexlog
  Com um grupo de usuário no Sexlog
  efetar o login com todos

  Scenario Outline: Sexlog multi parameter
    Given Acessar a URL "https://sexlog.com/"
    When Inserir o "<login>" e "<password>"
    Then precisa verificar se o texto do title no Explorar, está ok
    And verificar se o titulo da livecam no Explorar é "LIVECAM"
    Then Sair do Sexlog

    Examples:
      | login  | password |
      | login1 | 123asd   |
      | login2 | 123asd   |
      | login3 | 123asd   |