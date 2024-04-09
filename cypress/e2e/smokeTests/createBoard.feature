
Feature: Create New Board

    Scenario: Validate that the user can create a new board
        Given The user login in trello website
        When Clicks on create button in navbar
        And Chooses Create Board option
        And Types in Board title input field the board name
        And Clicks on create button
        Then The Board will be created successfully
