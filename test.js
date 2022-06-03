alert("hello")
let a = [1,2,5,5,5,9,9,5,56,56,15,64,8]
let b = [1,2,5,5,5,9,9,5,56,56,15,64,8]

for(let i=0;i<=a.length;i++){
    let l =a[i]+b[i-1]
    console.log(l)
}