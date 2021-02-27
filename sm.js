// HTML String Manger
//                by Hyppoprogramm
// 27.02.2021

let file = 'strings/strings.json';
function reload(){
    let strs = document.getElementsByTagName('string');
    for (let i = 0; i < strs.length; i++) {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://hippoapp.ultimatefreehost.in/' + file, true);
        request.responseType = 'json';
        request.send();
        request.onload = function(){
            strs[i].innerHTML = request.response[strs[i].id];
        }
    }
}
function setFile(f){
    file = f;
    reload();
}
document.addEventListener("DOMContentLoaded", reload);
