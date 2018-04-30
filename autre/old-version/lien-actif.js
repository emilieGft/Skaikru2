/////////// Liens actifs ///////////

var a = document.getElementsByTagName("a");


var active1 = document.getElementsByClassName("onglets_actif1");
var active2 = document.getElementsByClassName("onglets_actif2");
var active3 = document.getElementsByClassName("onglets_actif3");

/*
if (document.getElementsByTagName("a").className === active1) {
    '<a href="#" class="onglets_actif1"> Time </a>'
} else if (document.getElementsByTagName("a").className === active2) {
    '<a href="#" class="onglets_actif2"> Feelings </a>'
} else {
    '<a href="#" class="onglets_actif3"> Place </a>'
}*/

//we put a listener on the link
a.addEventListener('click', function() {
    document.getElementsByClassName("onglets_actif1").style.backgroundColor = "white";
});