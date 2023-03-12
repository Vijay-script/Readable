/*function submit()
{
const total=document.getElementById("area").value
const ans=total.length
console.log(ans)
}*/

const total=document.getElementById("area")
total.addEventListener("keyup",()=>{
    count()       
})
function count(){
  let sum=  document.getElementById("total").innerHTML=total.value.length
 document.getElementById("Remaining").innerHTML=total.getAttribute("maxLength")-total.value.length

}
//console.clear()