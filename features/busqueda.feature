Feature: Busqueda general por FolioPisa

    In order to find a job in Plex
    As a user
    I want to open the general search tab and make a search by folioPisa

    Scenario: Show the general search tab
        Given I am in the main page
        When I click on the button with id "busqueda_general_button"
        Then I should see the input "Folio PISA de la tarea"
    Scenario: Search a job by FolioPisa
        Given I opened the general search tab
        When I enter the folio "36016477"
        And I click on the button "Buscar"
        Then A pop up should appear with the job information for the folioPisa "36016477"