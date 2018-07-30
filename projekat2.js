
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lista").innerHTML = localStorage.getItem("sacuvajTask");
});



function dodajSacuvajTask() {

    let inputValue = document.getElementById("task").value;
    let li = document.createElement("li");
    let t = document.createTextNode(inputValue);



    li.appendChild(t);
    ulLista = document.getElementById("lista");
    ulLista.appendChild(li);



    let iks = document.createElement("a");
    iks.setAttribute("class", "ikonica");
    iks.setAttribute("onclick", "obrisiTask()");
    let slikaX = document.createElement("img");
    slikaX.setAttribute("src", "x-ikona.png");


    iks.appendChild(slikaX);
    li.appendChild(iks);
    document.getElementById("lista").appendChild(li);


    document.getElementById("task").value = "";

    let listaSave = document.getElementById("lista").innerHTML;
    localStorage.setItem("sacuvajTask", listaSave);


}
document.getElementById("task").focus();

function obrisiTask() {

    let pitanje = confirm("Want to delete?")
    if (pitanje == true) {
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
        let sacuvajTask = document.getElementById("lista").innerHTML;
        localStorage.setItem("sacuvajTask", sacuvajTask);
    }

}




function filtriranje() {

    let inputTekst = document.getElementById("filter");
    let lis = document.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
        if (lis[i].innerHTML.toLowerCase().indexOf(inputTekst.value.toLowerCase()) > -1) {
            lis[i].style.display = "";
        }
        else {
            lis[i].style.display = "none";
        }
    }
    document.getElementById("filter").focus();
}

function removeTasks() {

    x = document.getElementById("lista");
    x.parentNode.removeChild(x);
    localStorage.clear("sacuvaniTask");

}

