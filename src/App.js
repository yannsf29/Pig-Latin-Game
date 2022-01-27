import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'

class App extends Component{
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      phrase: "What would you like to have translated?",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)


      // This shows us what the 
      console.log(currentWord);

      



      var vowelIndex = currentWord.search(/[aeiou]/i)
      var yLocation = currentWord.search(/[y]/i)
      var locationQU = currentWord.toLowerCase().indexOf('qu')
      console.log(vowelIndex + 'vowelIndex');
      console.log(yLocation + 'yLocation');
      console.log("SQUID".toLowerCase().indexOf('qu'));

      const pigLatin = () => {
        if (vowelIndex === 0) {
          return currentWord + "way"
        } else if ((yLocation > 0 && yLocation < vowelIndex) || vowelIndex === -1){
          return currentWord.slice(yLocation) + currentWord.slice(0, yLocation) + 'ay'
        } else if (locationQU >= 0 && locationQU < vowelIndex) {
          return currentWord.slice(locationQU + 2) + currentWord.slice(0, locationQU + 2) + 'ay'
        } else {
          return currentWord.slice(vowelIndex) + currentWord.slice(0, vowelIndex) + 'ay'
        }}

      var piggedWord = pigLatin(currentWord)
      // Remember: console.log is your friend :)
      const removeNonLetters = () => {
        return piggedWord.replace(/[\W_0-9]/g, "")
      }


      // Trying to remove non-letter characters and place them at the end of the word --->
      // const punctuated = () => {
      //   if (piggedWord.search(/[\W]/g) > -1) {
      //     return piggedWord.slice(piggedWord.search)
      //   }
      // }


      return removeNonLetters().toLowerCase()
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({phraseTranslated: translatedWords})
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "What would you like to have translated?",
      phraseTranslated: "Translate anything you would like!"
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({phrase: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPig}
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Translate</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Coded by ~Regina~ ~Noah~ ~Yann~</footer>
      </>
    )
  }
}

export default App