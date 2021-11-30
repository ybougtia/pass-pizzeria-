/*var ok = document.querySelector("#oui").value;
var not = document.querySelector("#non").value;*/
var statut = document.querySelector("#pass");
var valider = document.querySelector("#valider");
var msg = document.querySelector(".message");

/*const Value1 = "oui";
const Value2 = "non";*/




valider.addEventListener("click", function() {

    if (statut.value === "oui") {
        msg.textContent = "Vous étes les Bienvenues !!!";
        msg.style.display = "block";
        msg.style.color = "green";
        msg.style.fontWeight = "bolder";




    } else if (statut.value === "non") {
        msg.textContent = "Désolé Mais le Pass est obligatoire !!!";
        msg.style.display = "block";
        msg.style.fontWeight = "bolder";
        msg.style.color = "red";

    }






})