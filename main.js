function getValueAndOpenIt(){
    var searchInput = document.getElementById("search-bar").value;
    if (searchInput.length == 0){
        alert("Aratma yapmak için Arama Bar'ına bir şeyler yazmanız lazım.");
    }
    else {
        var openedLink = "https://www.google.com/search?q=" + searchInput
        window.open(openedLink, "_blank")
    }
}

function getValueAndOpenAsImage(){
    var searchInput = document.getElementById("search-bar").value;
    if (searchInput.length == 0){
        alert("Aratma yapmak için Arama Bar'ına bir şeyler yazmanız lazım.");
    }
    else {
        var openedLink = "https://www.google.com/search?q=" + searchInput + "&tbm=isch"
        window.open(openedLink, "_blank")
    }
}

function feelingLucky(){
    var searchInput = document.getElementById("search-bar").value;
    if (searchInput.length == 0){
        alert("Aratma yapmak için Arama Bar'ına bir şeyler yazmanız lazım.");
    }
    else {
        var openedLink = "http://www.google.com/search?q=" + searchInput + "&btnI";
        alert(openedLink)
        window.open(openedLink, "_blank")
    }
}

// http://www.google.com/search?q=stackoverflow&btnI
// https://www.google.com/search?q=selam&btnI=Kendimi+Şanslı+Hissediyorum&
// https://www.google.com/search?ie=UTF-8&oe=UTF-8&sourceid=navclient&gfns=1&btnI=745&q=
// https://www.google.com/search?hl=en&ie=UTF-8&oe=UTF-8&btnI=I%27m+feeling+lucky&q=
// https://www.google.com/search?ie=UTF-8&oe=UTF-8&sourceid=navclient&gfns=1&q=

function bununBirIsleviYok() {
    alert("Bunun bir işlevi yok 😃")
}