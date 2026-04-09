const breadButton = document.getElementById("breadButton");
const drawerButton = document.getElementById("drawerButton");
breadButton.addEventListener("click", function calcCountTotals() {
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
    const frontFlatBag = Number(document.getElementById("frontFlatBag").value);
    const frontFlat = Number(document.getElementById("frontFlat").value);
    const frontSalad = Number(document.getElementById("frontSalad").value);
    const frontWrapBag = Number(document.getElementById("frontWrapBag").value);
    const frontPocketBag = Number(document.getElementById("frontPocketBag").value);
    const frontWrap = Number(document.getElementById("frontWrap").value);
    const textArea = document.getElementById("countTextArea");
    const bread = (freezerBreadBox * 80) + freezerBreadOpen + frontBread;
    const flat = (freezerFlatBox * 60) + (freezerFlatBag * 10) + (frontFlatBag * 10) + frontFlat;
    const salad = backSalad + frontSalad;
    const wraps = (freezerWrapBox * 80) + (freezerPocketBox * 96) + (freezerWrapBag * 8) + (freezerPocketBag * 6) + (frontWrapBag * 8) + (frontPocketBag * 6) + frontWrap;
    // alert(`Bread: ${bread} \nFlatbread: ${flat} \nSalad Bowls: ${salad} \nWraps: ${wraps}`);
    textArea.textContent = `Bread: ${bread.toFixed(2)} Flatbread: ${flat.toFixed(2)} Salad Bowls: ${salad.toFixed(2)} Wraps: ${wraps.toFixed(2)}`
    textArea.scrollIntoView();
});
drawerButton.addEventListener("click", function calcCashTotals() {
    const quarters1 = Number(document.getElementById("quarters1").value);
    const dimes1 = Number(document.getElementById("dimes1").value);
    const pennies1 = Number(document.getElementById("pennies1").value);
    const pennies2 = Number(document.getElementById("pennies2").value);
    const pennies3 = Number(document.getElementById("pennies3").value);
    const nickels = Number(document.getElementById("nickels").value);
    const dimes2 = Number(document.getElementById("dimes2").value);
    const quarters2 = Number(document.getElementById("quarters2").value);
    const twenties = Number(document.getElementById("twenties").value);
    const tens = Number(document.getElementById("tens").value);
    const fives = Number(document.getElementById("fives").value);
    const ones = Number(document.getElementById("ones").value);
    const cashKeep = Number(document.getElementById("cashKeep").value);
    const textArea = document.getElementById("cashTextArea");
    const coinDispenser = Math.round(quarters1 + dimes1 + pennies1 + pennies2 + pennies3 + nickels + dimes2 + quarters2);
    const preLooseCurrency = twenties + tens + fives + ones;
    const changeFund = Number(document.getElementById("changeFund").value);
    let cashDrop = (coinDispenser + preLooseCurrency) - cashKeep;
    let looseCurrency;
    // const looseCurrency = cashKeep - coinDispenser;
    if((preLooseCurrency + coinDispenser) < cashKeep) {
        textArea.style.color = "red";
        textArea.textContent = `ERROR: Cash in count is ${Math.abs(cashDrop).toFixed(2)} short!`;

    }else {
        looseCurrency = cashKeep - coinDispenser;
        textArea.style.color = ""
        textArea.textContent = ` Cash Drop: ${cashDrop.toFixed(2)} Loose Currency: ${looseCurrency.toFixed(2)} Coin Dispenser: ${coinDispenser.toFixed(2)} Change Fund: ${changeFund.toFixed(2)}`;
    }
    textArea.scrollIntoView();
});
