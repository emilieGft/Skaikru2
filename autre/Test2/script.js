function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent"); //onglet selectionné et montre les block
    for (i = 0; i < tabcontent.length; i++) { //fais apparaitre les blocks les uns sur les autres
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block"; //fais apparaitre les blocks
    evt.currentTarget.className += " active";
}