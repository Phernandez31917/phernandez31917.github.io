// Function to increase the font size of the within the textField text box
function makeBigger() {
    // Select the text area and change its font size
    document.getElementById("userText").style.fontSize = "24pt";
  }
  
  // Function to apply styles based on the selected radio button
  function applyStyle() {
    const textArea = document.getElementById("userText");
    
    // Will check to see if FancyShmancy radio button is selected
    if (document.getElementById("fancyShmancy").checked) {
      textArea.style.fontWeight = "bold";  // Make text bold
      textArea.style.color = "blue";       // Change text color to blue
      textArea.style.textDecoration = "underline";  // Underline the text
    } 
    // Will check to see if BoringBetty radio button is selected
    else if (document.getElementById("boringBetty").checked) {
      textArea.style.fontWeight = "normal";  // Reset font weight
      textArea.style.color = "black";       // Reset text color
      textArea.style.textDecoration = "none"; // Remove underline
    }
  }
  
  // This function will uppercase the text and add "-Moo" to the last word of each sentence
  function mooIt() {
    const textArea = document.getElementById("userText");
    let text = textArea.value;
  
    // Convert text to uppercase
    text = text.toUpperCase();
  
    // Add "-Moo" to the last word of each sentence
    let sentences = text.split('.'); // Split text into sentences
    sentences = sentences.map(sentence => {
      // Remove leading/trailing spaces and add '-Moo' to the last word
      let words = sentence.trim().split(' ');
      if (words.length > 0) {
        words[words.length - 1] += "-Moo"; // Add "-Moo" to the last word
      }
      return words.join(' '); // Join the sentence back together
    });
  
    // concatenates both of the sentences back with join and update the textarea
    textArea.value = sentences.join('. ') + (text.length ? '.' : ''); // Add period at the end
  }
  
