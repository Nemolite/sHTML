const deltodo = document.querySelector("#deltodo")
const modal = document.querySelector("#modal")
const cancel = document.querySelector("#cancel")
const cancelx = document.querySelector("#cancelx")
const dele = document.querySelector("#dele")
const rowtodo = document.querySelector("#rowtodo")

deltodo.addEventListener('click',() => {   
        
    modal.style.display = 'block';   
 })

 cancelx.addEventListener('click',() => {  
        
    modal.style.display = 'none';   
 })

 cancel.addEventListener('click',() => {  
        
    modal.style.display = 'none';   
 })

 dele.addEventListener('click',() => {     
   modal.style.display = 'none';     
   rowtodo.style.display = 'none';   
})

