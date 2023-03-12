/*const hours=document.getElementById('hours')
const min=document.getElementById('min')
const sec=document.getElementById('sec')
const ampm=document.getElementById('ampm')*/

function clock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let sec='AM'
    if(h>12){
      h=h-12
      sec='PM'
    }
      h=h<10 ? "0"+h : h;
      m=m<10 ? "0"+m : m;
      s=s<10 ? "0"+s : s;
   
    document.getElementById('hours').innerHTML=h
    document.getElementById('min').innerHTML=m
    document.getElementById('sec').innerHTML=s
    document.getElementById('ampm').innerHTML=sec
    setTimeout(()=>{
        clock()
   },1000)
 }
 clock()