// Create html and js files
    //---add comments through out html and js files---
    //html 1. link the js file at the bottom of the body
    //html 1. Use Live Server to inspect/view the console log
    //js 1. Create/Name string for the user saying: You have received...
    //js 2. Create an alert to display the welcome.
        //js 3. Create an easy to remember - secret identifier
            //js 4. Create variable for combo#1 (using math)
            //js 5. Create a variable for combo#2 (using math)
            //js 6. Create a variable for combo#3 (using math)
                //js 7. Create a function that displays the code in console log
                //js 8. Create a popup dialog box (mine refers the user to view the console log)
                    //end ---submit completed project in GitHub---      

let welcome = "You have received this message because you have been chosen to open an important vault.  Here is the secret combination."

alert(welcome);

//---enter the house number 279 here---
let bobsHouseNumber = 279;
console.log(bobsHouseNumber);
let vaultNumberOne = (bobsHouseNumber - 269);
let vaultNumberTwo = (vaultNumberOne * 8 / 2);
let vaultNumberThree = (vaultNumberTwo / 10 + 35);
let comboInst = `Spin the dial left, stopping at ${vaultNumberOne}. Spin right one entire turn and stop at ${vaultNumberTwo}.  Spin left, stopping at ${vaultNumberThree}. Now run!`
//---this is going to put the combo instructions in the console log.
console.log(comboInst);
window.confirm("View the console log for the details!");

//Brian showed us how to set up functions but I couldn't make this work.
// const solution = {
//    "The First Number": vaultNumberOne, 
//    "The Second Number": vaultNumberTwo,
//    "The Third Number": vaultNumberThree,

// function vaultSolution (bobsHouseNumber) {
    //  let vaultNumberOne = (bobsHouseNumber - 269);
    //  let vaultNumberTwo = (vaultNumberOne * 8 / 2);
    //  let vaultNumberThree = (vaultNumberTwo / 4 + 35);
    //  let comboInst = `Spin the dial left, stopping at ${vaultNumberOne}. Spin right one entire turn and stop at ${vaultNumberTwo}.  Spin left, stopping at ${vaultNumberThree}. Now run!`
// }
// vaultSolution(vaultNumberOne);
// vaultSolution(vaultNumberTwo);
// vaultSolution(vaultNumberThree);



//console.log(comboInst);
//window.confirm(comboInstructions)