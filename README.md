# Unit 03 Homework : Password-Generator

This is the homework assignment for Unit 03 JavaScript

<img src="assets\img\passwordgenerator.PNG">

## What problem are we trying to solve
This project was created to be a way for people to create secure passwords with the click of a button. The user is able to select the length of the password they wish to create between 8 and 128 characters. The user is also able to select the criteria for their password via some prompts on the page. The user must select one or more of the following for their password to be viable: lowercase letters, uppercase letters, numbers, and/or special characters. Once the user has selected from the prompts, then their password will be generated behind the scenes and will then be displayed in the field on the page.

## Requirements
- When the user clicks on the button to generate a password, then they are presented with a series of prompts for password criteria.
- When prompted for password criteria, the user can select which criteria they want to include in their password.
- When prompted for the length of their password, then the user must select a lenth of at least 8 characters and no more than 128 characters.
- When prompted for character types to include in the password, the user can choose lowercase, uppercase, numeric, and/or special characters.
- After the user selects from each prompt, their inputs are validated and at least one character type should be selected.
- When all prompts are answered, then a password is generated that matches the selected criteria.
- When the password is generated, then the password will be displayed in an alert or written to the page.

## Notes
I believe that this project went very well. I believe that there may be a better way of doing this project than how I did it. I hard coded arrays for each character type selection that the user could select from. I have seen that there is an ascii table that could be drawn from, but I have not figured a way to use that. Another issue that I have noticed with my project is that sometimes the prompts to the user can repeat, but I cannot reliably recreate it so I am not positive as to what is creating the issues. Besides those minor issues my project works as specified in the acceptance criteria.

Link to the live site: [Password Generator](https://stessman.github.io/03-Password-Generator/)