function calcTotals() {
    const freezerBreadBox = Number(document.getElementById("freezerBreadBox").value);
    const freezerBreadOpen = Number(document.getElementById("freezerBreadOpen").value);
    const freezerFlatBox = Number(document.getElementById("freezerFlatBox").value);
    const freezerFlatBag = Number(document.getElementById("freezerFlatBag").value);
    const freezerWrapBox = Number(document.getElementById("freezerWrapBox").value);
    const freezerWrapBag = Number(document.getElementById("freezerWrapBag").value);
    const freezerPocketBox = Number(document.getElementById("freezerPocketBox").value);
    const freezerPocketBag = Number(document.getElementById("freezerPocketBag").value);
    const backSalad = Number(document.getElementById("backSalad").value);
    const frontBread = Number(document.getElementById("frontBread").value);
    const frontFlat = Number(document.getElementById("frontFlat").value);
    const frontSalad = Number(document.getElementById("frontSalad").value);
    const frontWraps = Number(document.getElementById("frontWraps").value);
    const bread = (freezerBreadBox * 80) + freezerBreadOpen + frontBread;
    const flat = (freezerFlatBox * 60) + (freezerFlatBag * 10) + frontFlat;
    const salad = backSalad + frontSalad;
    const wraps = (freezerWrapBox * 80) + (freezerPocketBox * 72) + (freezerWrapBag * 8) + (freezerPocketBag * 6) + frontWraps;
    alert(`Bread: ${bread} \nFlatbread: ${flat} \nSalad Bowls: ${salad} \nWraps: ${wraps}`);
}