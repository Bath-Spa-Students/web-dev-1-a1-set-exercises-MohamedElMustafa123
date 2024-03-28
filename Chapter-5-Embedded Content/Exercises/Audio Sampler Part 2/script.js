var sound1 = new Audio(); //we create a variable called sound1 and create an audio object
sound1.src = "Audio/ah-ha.mp3" //we choose the file path of the audio we want to store in the variable

var sound2 = new Audio();
sound2.src = "Audio/back-of-the-net.mp3"

var sound3 = new Audio();
sound3.src = "Audio/bangoutoforder.mp3"

var sound4 = new Audio();
sound4.src = "Audio/dan.mp3"

var sound5 = new Audio();
sound5.src = "Audio/emailoftheevening.mp3"

var sound6 = new Audio();
sound6.src = "Audio/hellopartridge.mp3"

var sound7 = new Audio();
sound7.src = "Audio/iateascotchegg.mp3"

var sound8 = new Audio();
sound8.src = "Audio/imconfused.mp3"

function textToAudio() { //defines a function called textToAudio
    let msg = document.getElementById("text_to_convert").value; //gets a value from the html element with the id "text_to_convert"
    let speech = new SpeechSynthesisUtterance(); //contains the content the speech service should read and information about how to read it
    speech.lang = "en-US"; //language is english USA
    speech.text = msg; //text inserted by the user to be spoken
    speech.volume = 1; //volume of the speech is set to 1
    speech.rate = 1; //speed of the speech
    speech.pitch = 1; //pitch of the speech
    window.speechSynthesis.speak(speech); //makes the browser speak what is inputted in the speech variable 
    }

const bgAnimation = document.getElementById('bgAnimation'); //select the div with the id "bgAnimation". 
//the reference is assigned to constant variable "bgAnimation"

const numberOfColorBoxes = 400; //creates a constant variable with the value 400

for (let i = 0; i < numberOfColorBoxes; i++) { //iterates from 0 as long as "numberOfColorBoxes" is greater than i
    const colorBox = document.createElement('div'); //a div is created for each iteration and assigned the class "colorBox"
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox) //appends the divs to the div with the id "bgAnimation"
}