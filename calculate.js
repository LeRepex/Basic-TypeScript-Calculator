function calculateplus() {
    var Values = getValues();
    document.getElementById("Ergebnis").valueAsNumber = Values[0] + Values[1];
}
function calculateminus() {
    var Values = getValues();
    document.getElementById("Ergebnis").valueAsNumber = Values[0] - Values[1];
}
function calculatemultiply() {
    var Values = getValues();
    document.getElementById("Ergebnis").valueAsNumber = Values[0] * Values[1];
}
function calculatedivide() {
    var Values = getValues();
    document.getElementById("Ergebnis").valueAsNumber = Values[0] / Values[1];
}
function getValues() {
    var Wert1 = (document.getElementById("Wert1").valueAsNumber);
    var Wert2 = (document.getElementById("Wert2").valueAsNumber);
    return [Wert1, Wert2];
}
