// // function ticketbooking(){
// //     return new Promise((resolve,reject)=>
// //     {
// //         let bookingsucces=false
// //         if( bookingsucces)
// //         resolve()
// //         else
// //         reject(0)
// //     })
// // }

// // ticketbooking().then(()=>console.log("done"))
// // .catch((amt)=>console.log(`wrong ${amt}`))

// // function success(){
// //     console.log("done")
// // }
// // function fail(){
// //     console.log("wrong")
// // }
// // //========================tosscoin=======
// // function tosscoin(){
// //       return new Promise((resolve,reject)=>
// // {
// //   const toss=Math.floor(Math.random()*1)
// //   if(toss==0)
// //        resolve()
// //    else
// //        reject()
// // })
// // }
// // tosscoin()
// // .then(()=>console.log(`head `))
// // .catch(()=>console.log("tail"))


// let reachA=new Promise((resolve,reject)=>{
//     let reched=true
//     if(reched)
//     setTimeout(resolve,3000,"vijay reched home")
//     else
//     reject("vijay  not reched home")
// })
// let reachB=new Promise((resolve,reject)=>{
//     let reched=true
//     if(reched)
//     setTimeout(resolve,2000,"appu reched home")
//     else
//     reject("appu  not reched home")
// })
// let reachC=new Promise((resolve,reject)=>{
//     let reched=true
//     if(reched)
//     setTimeout(resolve,5000,"ram reched home")
//     else
//     reject("ram  not reched home")
// })
// Promise.race([reachA,reachB,reachC])
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))

// try{
//     num=prompt("enter the number")
//     if(num=='')
//     throw "empty"
//     if(isNaN(num))
//     throw "enter valid number"
//     console.log(num**2)
// }
// catch(error){
//     console.log(error)
// }
// finally{
//     console.log("thank you")
// }
// async function  h(){
//     return 'haii'
// }
// console.log(h())
// h().then((n)=>console.log(n))



//================async and awaite
// let reachC=new Promise((resolve,reject)=>
// {
//      let h=false
//      if(h)
//      setTimeout(resolve,4000,"how")
//      else
//      reject("haii")
// })

//  async function  astatus(){
//  try{
//     console.log("no")
//     let ans=await reachC
//     console.log(ans)
//     console.log("bye")
//  }
//  catch(err){
//     console.log(err)
//  }
// }


let j1='vijay'
let j2=1
let j3={
    "name":"vijay",
    "age":23
}
let j4=`[
    {
        "name":"vijay",
        "age":23 
    },
    {
        "name":"balaji",
        "age":20 
    },
    {
        "name":"appu",
        "age":18
    }
]`
let par=JSON .parse(j4)

// console.log(par[1].age)
// console.log(JSON.stringify(par))//conver string type


fetch('https://api-thirukkural.vercel.app/api?num=2000')
.then((ans)=> ans.json())
.then((mess)=>console.log(mess.line1,mess.line2,mess.tam_exp))
.catch(err=>console.log(err))