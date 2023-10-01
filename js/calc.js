const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const mult = document.querySelector("#mult")
const divd = document.querySelector("#divd")

plus.addEventListener('click',() => {
    const var1 = Number(document.querySelector("#var1").value)
    const var2 = Number(document.querySelector("#var2").value)    
    const result = document.querySelector("#result")  
    result.innerHTML =var1 + var2
 })

 minus.addEventListener('click',() => { 
    const var1 = Number(document.querySelector("#var1").value)
    const var2 = Number(document.querySelector("#var2").value)
    const result = document.querySelector("#result")
    result.innerHTML =var1 - var2
 })

 mult.addEventListener('click',() => { 
    const var1 = Number(document.querySelector("#var1").value)
    const var2 = Number(document.querySelector("#var2").value)
    const result = document.querySelector("#result")
    result.innerHTML =var1 * var2
 })

 divd.addEventListener('click',() => {
    const var1 = Number(document.querySelector("#var1").value)
    const var2 = Number(document.querySelector("#var2").value)
    const result = document.querySelector("#result") 
    result.innerHTML =var1 / var2
 })