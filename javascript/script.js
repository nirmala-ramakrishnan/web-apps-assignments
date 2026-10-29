function setGreeting() {

    let now = new Date(); //built in class in Javascript 
    console.log("I am printing time: " + now.getHours());

    let hours = now.getHours();
    let greeting = "";

    // Good morning - < 12 
    // Good afternoon - < 6 pm 
    // Good night - otherwise 
    if (hours < 12) {
        greeting = "Good morning";
    }
    else if (hours < 18) {
        greeting = "Good afternoon";

    }
    else {
        greeting = "Good night";
    }

    console.log(greeting); 
    document.getElementById("greetingOutput").textContent = greeting; 


}

// When the window starts up, call these function
window.onload = function () {
    setGreeting();
}

function setButtonText(){
    document.getElementById("buttonClickText").textContent = "Hello world"; 
}

function setButtonTextDate(){
    let now = new Date(); 
    document.getElementById("buttonClickTextDate").textContent = now; 
}

function addNumbers()
{
    let num1 = parseInt(document.getElementById("num1").value); 
    let num2 = parseInt(document.getElementById("num2").value); 
    let result = num1 + num2; 

    document.getElementById("addValue").textContent = result; 

}

function getStringLength()
{
    let userString = document.getElementById("userString").value; 
    let lenUserString = userString.length; 

    let outputStr = "\"" + userString + "\" has " + lenUserString + " characters"; 
    document.getElementById("getStringLengthOutput").textContent = outputStr; 
}

function togglePassword()
{
    let passwordCheck = document.getElementById("togglePasswordOption"); 

    if(passwordCheck.checked)
        document.getElementById("passwordStr").type = "text"; 
    else  
        document.getElementById("passwordStr").type = "password"; 
}

function changeFont()
{
    let fontChangeStr = document.getElementById("fontChangeStr"); 
    fontChangeStr.style.fontSize = "30pt"; 
    fontChangeStr.style.color = "blue"; 
    
}

function toggleDisplay()
{
    let toggleDisplayStr = document.getElementById("toggleDisplayStr"); 
    if(toggleDisplayStr.style.display == "none")
        toggleDisplayStr.style.display = "block"; 
    else 
        toggleDisplayStr.style.display = "none"; 
}
