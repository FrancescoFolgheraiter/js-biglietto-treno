/*consegna
0)  Never trust user input
1)  Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
2)  Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    a)  il prezzo del biglietto è definito in base ai km (0.21 € al km)
    b)  va applicato uno sconto del 20% per i minorenni
        va applicato uno sconto del 40% per gli over 65.
3)L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


//input dati
const numeroKm = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));
const eta = parseInt(prompt("Inserisci la tua età"));
console.log("numero km", numeroKm, typeof numeroKm)
console.log("età", eta, typeof eta)

let prezzoBiglietto = numeroKm * 0.21;
console.log("prezzo biglietto", prezzoBiglietto, typeof prezzoBiglietto)

if ((isNaN(numeroKm) || isNaN(eta)) && ((eta <= 130) && (eta >= 1))){
    alert("Devi inserire un numero come età tra 1 e 130 e un numero come chilometri")
}
else{
    if (eta < 18) {
        prezzoBiglietto *= 0.8;
    }
    else if (eta >= 65){
        prezzoBiglietto *= 0.6;
    }
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    console.log("prezzo biglietto scontato", prezzoBiglietto, typeof prezzoBiglietto)
    //output dati
    document.querySelector(".risultato").innerHTML = "Il prezzo è il seguente: € " + (prezzoBiglietto);

}

