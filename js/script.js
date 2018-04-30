/*** fonction Fade in Tabs ***/
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content"); //onglet selectionné et montre les block
    for (i = 0; i < tabcontent.length; i++) { //fais apparaitre les blocks les uns sur les autres
        tabcontent[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block"; //fais apparaitre les blocks
    evt.currentTarget.className += " active";
}