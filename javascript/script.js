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
