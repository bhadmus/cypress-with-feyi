Feature: Amazon Search

    Background:
        Given I am on the amazon site

    Scenario: User should be able to search for a Ferrari
        When I search for "ferrari-458"
        Then I should find a list of Items for a "ferrari"

    Scenario: User should be able to search for a iPhone Charger
        When I search for "iPhone 12 Pro Max Turbo Charger"
        Then I should find a list of Items for a "iPhone"
