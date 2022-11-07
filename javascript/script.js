function showErrors() {
    if (document.getElementById("imie").value=="") {
        alert("Uzupełnij pole \"imie\"!");
    } else {
        document.imie = document.getElementById("imie").value;
    }

    if (document.getElementById("nazwisko").value=="") {
        alert("Uzupełnij pole \"nazwisko\"!");
    } else {
        document.nazwisko = document.getElementById("nazwisko").value;
    }

    if (document.getElementById("plec").value.toString=="") {
        alert("Zaznacz odpowiednią pozycje w polu \"płeć\"!");
    } else {
        document.plec = document.getElementById("plec").value;
    }

    if (document.getElementById("kolor").value.toString=="") {
        alert("Wybierz kolor");
    } else {
        document.kolor = document.getElementById("kolor").value;
    }

    document.data_ur = document.getElementById("data_ur").value.toString
}