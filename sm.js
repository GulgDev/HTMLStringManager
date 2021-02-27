let file = 'strings\\strings.json';
function reload(){
  for(string in strings){
    let fr = new FileReader(); 
    fr.onload=function(){ 
      let res = JSON.parse(fr.result);
      string.innerHTML(res[string.getAttribute('id')]);
    }
    fr.readAsText(file); 
  }
}
let strings = document.getElementsByTagName('string');
reload();
