Feature: @Search
In order to test the page
As a QA
I want to be able to validade all the scenarios on the Feature Search

  @DidYouMean
  Scenario: ('validate Did you mean corrector')
    Given that I am in the Google homepage
    When I digit Tesssst in the search bar
    And click the Search Google button
    Then I see the Did you mean corrector suggestion

  @ImLucky
  Scenario: ('validate success Im lucky search')
    Given that I am in the Google homepage
    When I click the Im Lucky button
    Then I see the Doodles page
