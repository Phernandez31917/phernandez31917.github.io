/*
 * Starter file 
 */
(function() {
  "use strict";
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // The message will be logged when the page is loaded
    console.log("Window loaded!");

    const encryptButton = document.getElementById('encrypt-it');
    encryptButton.addEventListener('click', handleEncrypt);

    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', handleReset);
  }


  /**
   * This function handles the Encrypt-It! button click event.
   * Encrypts the text from the input textarea (input-text) using a the shiftCipher function
   * and displays the result by replacing the result textarea with the answer result.
   */
  function handleEncrypt() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = shiftCipher(inputText);
    const result = document.getElementById('result');
    result.textContent = encryptedText; // Display the encrypted text
    console.log("Encryption performed:", encryptedText);
  }


   /* This function handles the reset button click event which will clear the input-text field*/
  function handleReset() {
    // Will clear the content of the textarea (input-text) by setting it to empty
    const inputText = document.getElementById('input-text');
    inputText.value = ""; // Clear the textarea value

    //This will clear the result box as well, making it seem more cleaner when reset is clicked
    const result = document.getElementById('result');
    result.innerHTML = ""; // Clear the result paragraph
  }


  /**
   * Encrypts a given text using a basic shift cipher.
   * Shifts each letter by 1, It wraps from 'z' to 'a' to solely include alphabetical,.
   * All other non-alphabetical symbols are unchanged
   * It inputs in a user typed String, and returns the encrypted String.
   */
  function shiftCipher(text) {
    let encrypted = "";
    for (let char of text) {
      if (char >= 'a' && char <= 'z') {
        // Shift lowercase letters
        encrypted += String.fromCharCode((char.charCodeAt(0) - 97 + 1) % 26 + 97);
      } else if (char >= 'A' && char <= 'Z') {
        // Shift uppercase letters
        encrypted += String.fromCharCode((char.charCodeAt(0) - 65 + 1) % 26 + 65);
      } else {
        // Non-alphabet characters remain unchanged, will be simply added
        encrypted += char; 
      }
    }
    return encrypted; //The concatenated String with all Chars added will be returned here
  }







})();
