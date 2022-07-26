Feature: Assessment


Background: Webpage
    When Get to "https://practis.co.il/automation/"
    Then Login 

 Scenario: Do1 & Do2
    
    When Button DO-1 is clicked
    Then Button DO-2 is disabled
    When Button DO-1 is clicked
    Then Button DO-1 is disabled

Scenario: Change font size

   When Up arrow is clicked AND it's size increases
   Then Down arrow is clicked AND it's size decreases

 Scenario: *BONUS* Background Color
   When the colour "blue" is written
   Then Background colour changes to "blue"

