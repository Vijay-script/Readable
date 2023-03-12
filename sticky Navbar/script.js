let nav=document.querySelector("#myname");
//console.log(nav)
let bottom=document.getElementById("bottom-content");
console.log(nav.offsetHeight);

console.log(bottom.offsetTop);

window.addEventListener("scroll",()=> 
{
   
    if(window.scrollY > bottom.offsetTop - nav.offsetHeight-40)
    {
        nav .classList.add("color")
    }
    else{
        nav .classList.remove("color")

    }
});


// console.log("haii")
   //console.log(Math.round(window.scrollY))
//    if(window.scrollY > bottom.offsetTop-nav.offsetHeight-40)