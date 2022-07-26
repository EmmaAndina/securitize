Feature: Assessment


Background: Webpage
    When Get to "https://practis.co.il/automation/"
    Then Login 
    #Then Logins with user: "admin" and password : "admin" 
 Scenario: Do1 & Do2
    
    When Button DO-1 is clicked
    Then Button DO-2 is disabled
    When Button DO-1 is clicked
    Then Button DO-1 is disabled

Scenario: Change font size

   When Up arrow is clicked & it's size increases
   Then Down arrow is clicked & it's size decreases

 Scenario: *BONUS* Background Color
   When the colour "blue" is written
   Then Background color changes to "blue"

