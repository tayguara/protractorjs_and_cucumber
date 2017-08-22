Feature: Execute a simple search in some Search Site
  In accord with environment, get a different search site
  type a word to search
  the result should be same word searched

  Scenario: Simple search whit ProtractorJS and CucumberJS
    Given I get a search site url "SEARCH_URL"
    When I type "Cucumber and ProtractorTest"
    Then I wait to result site
    And I check result list to validate the search, should be "TRUE"
    Then I close the browser