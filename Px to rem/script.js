var px=document.getElementById('pexel');
var rm=document.getElementById('rem');
px.addEventListener('input',function(){
    let p=this.value;
    let r=(p *0.0625);
    if (p>=0){
      rm.value=r;
}
});

rm.addEventListener('input',function(){
    let r=this.value;
    let p=(r *16);
    if (r>=0){
     px.value=p;
 }
});