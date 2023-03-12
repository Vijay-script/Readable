let container=document.getElementById("container")
//console.log(container)
for (let index = 0; index < 20; index++) {
    const element =document.createElement('div')
    element.classList.add("box")
    container.appendChild(element)
  
}
const add =document.querySelectorAll(".box")


function gen(){
    add.forEach((element)=>{
        const newcolor=randonColor()
        element.style.backgroundColor="#"+newcolor
        element.innerHTML="#"+newcolor
       // document.querySelector(".box").innerHTML="#"+newcolor
    //console.log(newcolor);


    })
}
gen()

function randonColor(){
    const colorCode="0123456789ABCDEF";
    const length=6;
    let color="";
    for (let index = 0; index < length; index++) {
       const num= Math.floor(Math.random()*colorCode.length);
      // console.log(num)
       color=color+colorCode.substring(num,num+1);
        
    }
    return color;


}
randonColor()