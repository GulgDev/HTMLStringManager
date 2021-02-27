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
document.body.onload = function(){
  let strings = document.GetElementsByTagName('string');
  reload();
}
