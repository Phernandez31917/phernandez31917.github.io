// Will alert test to verify JS linkage
function makeTextBigger() {
    // This will access the textarea and set its font size to 24pt
    const textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";
}

// This will apply styles based on the selected radio button
function applyStyle() {
    const textArea = document.getElementById("userText");
    const fancyRadio = document.getElementById("fancyShmancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Will convert text to uppercase and add "-Moo" to each sentence
function mooifyText() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    textArea.value = sentences.join(". ");
}
