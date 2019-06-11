drop_down_items = 3;
hello(what){
  
  let items = ["compose", "inbox", "outbox"];
  for(let i=0;i<this.drop_down_items;i++){
  let x= document.getElementById(items[i]);
    x.style.display="none";
  }
  
  document.getElementById(what).style.display = "block";
}
aler(){
  alert("message sent..");
}