Anagram Solver - React Frontend
====

This is the second part to a tech test where we were asked to demonstrate our JavaScript abilities with a simple anagram challenge. 
The [part 1 test](https://github.com/Whatapalaver/anagram_solver_node) was completed in Node.js and fully TDD's with Jasmine. This version just takes that code with minimal tweaking, to demonstrate an interactive frontend.

### _Original Challenge Instructions_

Imagine you are in a work environment, and a colleague has asked you to create a simple interactive application which can solve anagrams.

For a word entered by the user, generate a list of all possible anagrams contained in this [wordlist](http://codekata.com/data/wordlist.txt).

For instance, if the user enters paste, your program should produce the results pates, peats, septa, spate, tapes, and tepas.

Consider especially how we will know if your code is correct, without having to run it exhaustively against the entire word list.

You may also wish to consider how your code handles edge cases such as hyphenated words. 

## _User Stories_

---

```
As a player
Who fancies cheating at scrabble
I would like to generate a list of anasgrams for a given word
```

```
As a player
Who likes a flashy interface
I would like a 60's styled web app

```

```
As a player
Who may need to cheat on the go
I would like a responsive design

```

## _Discussion relating to the React Challenge_  

You can see a full discussion of the anagram coding logic in the README to the [part 1 test](https://github.com/Whatapalaver/anagram_solver_node)

### _Additional issues with React_

I struggled to handle the text file with the allowable wordlist so I have mocked it up with a very small array. That significantly removes the joy of playing with the app but I will work on resolving it.

I also need to correct the error on display of the individual results that occurs because I haven't added unique id's for each item.

To Use
---

- Clone or fork this project `git clone https://github.com/Whatapalaver/anagram_react.git`
- Change into the directory `cd anagram_react`
- Install dependencies `npm install`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
