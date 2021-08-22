function calculateplus() {
    var Values = getValues();
    (document.getElementById("Ergebnis")as HTMLInputElement).valueAsNumber = Values[0] + Values[1];
}
function calculateminus(){
    var Values = getValues();
    (document.getElementById("Ergebnis")as HTMLInputElement).valueAsNumber = Values[0] - Values[1];
}
function calculatemultiply(){
    var Values = getValues();
    (document.getElementById("Ergebnis")as HTMLInputElement).valueAsNumber = Values[0] * Values[1];
}
function calculatedivide(){
    var Values = getValues();
    (document.getElementById("Ergebnis")as HTMLInputElement).valueAsNumber = Values[0] / Values[1];
}
function getValues() {
    var Wert1: number = ((document.getElementById("Wert1") as HTMLInputElement).valueAsNumber);
    var Wert2: number = ((document.getElementById("Wert2") as HTMLInputElement).valueAsNumber);
    return [Wert1, Wert2]
}
