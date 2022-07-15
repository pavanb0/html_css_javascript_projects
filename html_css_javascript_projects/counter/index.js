/*let main= 0;
const delay = async (ms = 1000) =>
new Promise(resolve => setTimeout(resolve, ms))
function increase(){
    main++;
    let flag= document.getElementById("main");
    flag.innerHTML=main;
}
function decrease(){
    main--;    
    let flag= document.getElementById("main");
    flag.innerHTML=main;

}
function reset(){
    main=0;
    let flag= document.getElementById("main");
    flag.innerHTML=main;  

}
var v1=document.getElementById("in1")
var v2=document.getElementById("in2")
v1.innerText="efeee"*/
//********* Temperature converter (JAVASCRIPT CODE)
// Function to convert temp From Fahrenheit TO Celsius 
//$%$%%$%$%  edit:- code has fatal flaw of input is not defined in any way 
function toCelsius(temp){
    return (temp - 32) * (5 / 9);
}
// Function to convert temp From Celsius To Fahrenheit
function toFahrenheit(temp){
    return (temp * 9 / 5 + 32);
}
function funk(){
    if(document.getElementById("cin").checked){
        return true;
    }else{
        return false;
    }
}
// Working 
document.getElementById("submitButton").onclick = function(){
    let temp;

/* To get the Degree sumbol(°) [Press And Hold ALT Key And Press 0176 On NumPad] Doesn't Work IF You Don't Have
 NumPad in Laptop */
    
// When radioButton(cButton or Celsius) one is selected  
    let state = funk();
    if (document.getElementById("cButton").checked){
        if(state==false){
            temp = document.getElementById("textBox").value;  // Value Entered in Label Got selected
            temp = Number(temp);  // Convert the user input into integer form
            temp = toCelsius(temp);  // Function is called
            document.getElementById("templabel").innerHTML = temp + " °C ";  // Output is displayed on the label
        }else{
            temp = document.getElementById("textBox").value;  // Value Entered in Label Got selected
            temp = Number(temp);
            document.getElementById("templabel").innerHTML = temp + " °C ";
        }
    }
    // When radioButton(fButton or Fahrenheit) one is selected 
    else if (document.getElementById("fButton").checked){
        if(state==true){
        temp = document.getElementById("textBox").value;   // Value Entered in Label Got selected
        temp = Number(temp);  // Convert the user input into integer form
        temp = toFahrenheit(temp);  // Function is called
        document.getElementById("templabel").innerHTML = temp + " °F ";  // Output is displayed on the label
        }else{
            temp = document.getElementById("textBox").value;   // Value Entered in Label Got selected
            temp = Number(temp);
            document.getElementById("templabel").innerHTML = temp + " °F "; 
        }
    }
    else {
        document.getElementById("templabel").innerHTML = "Select a unit";  // Displayed when user doesn't select any radioButton
    }
}
