 const image=document.querySelector("body");
 image.addEventListener("mousemove",(event)=>{
    const x=event.offsetX
    const y=event.offsetY
    const span=document.createElement("div");
    span.style.left=x+"px"
    span.style.top=y+"px"
const size=Math.random()*100;
    span.style.width=size+"px"
    span.style.height=size+"px"
    image.appendChild(span);
    setTimeout(() => {
        span.remove()
    }, 3000);
 });

