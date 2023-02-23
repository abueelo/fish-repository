
function updatePage(){
    console.log("test");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("title").innerHTML = "My favourite <s class='crossthrough'><span class='crossthrough-text'>&nbsp;fish&nbsp;<span></s> pollutants"
    }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}