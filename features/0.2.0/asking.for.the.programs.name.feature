
@version:0.2.0

Feature: Asking for the program's name
    
    As a user,
    I want to ask the program for its name,
    So that I can identify it easily.

    Background:
        Given I am using the program

    Scenario Outline: Asking for the program's name in different ways
        When I use a "<way to ask for a program's name>"
        Then The program should respond with its name

    Examples:
        | way to ask for a program's name           |
        | What is your name?                        |
        | Can you tell me your name?                |
        | May I know your name?                     |
        | What should I call you?                   |
        | What do you go by?                        |
        | How do you identify yourself?             |
        | What name do you use?                     |
        | Can you introduce yourself?               |
        | What is your program name?                |
        | How should I refer to you?                |
        | Could you share your name with me?        |
        | What’s your official name?                |
        | What is the title of your program?        |
        | What do you prefer to be called?          |