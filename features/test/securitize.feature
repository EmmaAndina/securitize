Feature: Assessment


Background: Webpage
    When Get to "https://practis.co.il/automation/"
    Then Login
 
 Scenario: Do1 & Do2
    
    When Button DO-1 is clicked
    Then Button DO-2 is disabled
    When Button DO-1 is clicked
    Then Button DO-1 is disabled


 Scenario: Change Font text

    When the UP arrow is clicked
    Then the font size gets bigger
    When the DOWN arrow is clicked
    Then the font size gets smaller

 Scenario: *BONUS* Background Color
    When a "colorname" is written
    Then Background color changes to "colorname" 

