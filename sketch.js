function toonInformatie() {
    const naam = document.getElementById("naam").value;
    const leeftijd = document.getElementById("leeftijd").value;
    const hobby = document.getElementById("hobby").value;

    const output = `Hallo ${naam}, je bent ${leeftijd} jaar oud en je hobby is ${hobby}.`;
    document.getElementById("output").innerText = output;
}
