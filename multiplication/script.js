const num1=Math.floor(Math.random()*10)
const num2=Math.floor(Math.random()*20)
const form=document.getElementById('form')
const input=document.getElementById('input')
const ques=document.getElementById('qus').innerHTML=`what is ${num1} multipile by ${num2} ?`
let con=num1*num2
let ans
console.log(con)

function convert()
{
    const ans=Number(input.value)
    console.log(ans,typeof ans)
   if(con==ans)
    
 {
    score=1
    console.log(score)
   let s = Number(document.getElementById('score').innerHTML=`score:${score}`)
}
else
{
    score=0
    console.log(score)
   let s =Number( document.getElementById('score').innerHTML=`score:${score}`)
}

}

function local()
{
    local.setItem("score",JSON.stringify(score))
}