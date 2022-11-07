function showErrors() {
    if (document.getElementById("imie").value=="") {
        alert("Uzupełnij pole \"imie\"!");
    }

    if (document.getElementById("nazwisko").value=="") {
        alert("Uzupełnij pole \"nazwisko\"!");
    }
    
    if (document.getElementById("plec").value=="") {
        alert("Zaznacz odpowiednią pozycje w polu \"płeć\"!");
    }

    if (document.getElementById("kolor").value=="") {
        alert("Wybierz kolor");
    }
}