function string() {
    let strings;
    strings = document.getElementById("string").value;
    let sp = strings.split("");
    let reversArray = sp.reverse();
    let joinArray = reversArray.join("");
    document.getElementById("Result").value = joinArray;


}

function minus() {
    var first_Number, second_number, Result;
    first_Number = parseInt(document.getElementById("first").value);
    second_number = parseInt(document.getElementById("second").value);
    Result = first_Number - second_number;
    document.getElementById("Result").value = Result;


}
function sum() {
    var first_Number, second_number, Result;
    first_Number = parseInt(document.getElementById("first").value);
    second_number = parseInt(document.getElementById("second").value);
    Result = first_Number + second_number;
    document.getElementById("Result").value = Result;


}
function division() {
    var first_Number, second_number, Result;
    first_Number = parseInt(document.getElementById("first").value);
    second_number = parseInt(document.getElementById("second").value);
    Result = first_Number / second_number;
    document.getElementById("Result").value = Result;


}
function multiply() {
    var first_Number, second_number, Result;
    first_Number = parseInt(document.getElementById("first").value);
    second_number = parseInt(document.getElementById("second").value);
    Result = first_Number * second_number;
    document.getElementById("Result").value = Result;
}
function Clear() {
    var first_Number, second_number, Result, strings;
    first_Number = document.getElementById("first").value = "";
    second_number = document.getElementById("second").value = "";
    Result = document.getElementById("Result").value = "";
    strings = document.getElementById("string").value = "";
}