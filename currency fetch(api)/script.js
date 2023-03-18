let select=document.querySelectorAll(".currency")
let button= document.getElementById("button")
let input =document.getElementById('input')
// console.log(select)
fetch('https://api.frankfurter.app/currencies')
.then(ans=>ans.json())
.then(ans=>display(ans))
function display(ans)
{
    //console.log(Object.entries(ans))
    let cur= Object.entries(ans)
    for(let i=0;i<cur.length;i++)
    {
         let optional=`<option value="${cur[i][0]}">${cur[i][0]}</option>`
        //  document.getElementById
        select[0].innerHTML +=optional;
        select[1].innerHTML +=optional;
       
    }
}
button.addEventListener('click',()=>{
         let cur1=select[0].value
         let cur2=select[1].value
         let inputans= input.value
         if(cur1==cur2)
         alert("enter valid currency");
         else
         convert(cur1,cur2,inputans)
})
function convert(cur1,cur2,inputans)
{
    const host = 'api.frankfurter.app';
   fetch(`https://${host}/latest?amount=${inputans}&from=${cur1}&to=${cur2}`)
  .then(resp => resp.json())
  .then((data) => {
    
    document.getElementById('result').value=Object.values(data.rates)[0];
  });
}



