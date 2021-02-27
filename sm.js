// HTML String Manger
//                by Hyppoprogramm
// 27.02.2021

let file = 'strings/strings.json';

function reload(){
    let strs = document.getElementsByTagName('string');
    let request = new XMLHttpRequest();
    request.open('GET', 'http://www.yourwebsite.com/' + file, false); // Replace with your domain
    request.send();
    let json = JSON.parse(request.response);
    for (let i = 0; i < strs.length; i++) {
        strs[i].innerHTML = json[strs[i].id];
    }
}
function useFile(f){
    file = f;
    reload();
}

function setFile(f){
    file = f;
}

document.addEventListener("DOMContentLoaded", reload);
