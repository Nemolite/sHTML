
const btn = document.querySelector("#btn")
var rnd = Math.floor(Math.random() * 20) + 1;
console.log(rnd)
var i = 0;
btn.addEventListener('click',() => {   
    var msg = document.querySelector("#msg")   
        const user_num = Number(document.querySelector("#user_num").value)
        if (rnd===user_num){
            switch(i) {
                case 0: 
                    res_str = `Поздравляем! Вы сразу угадали число ${rnd}` 
                    break
              
                case 1:  
                    res_str = `Поздравляем! Вы угадали число ${rnd} за ${i} попытку` 
                    break

                case 2:
                case 3:  
                case 4:
                    res_str = `Поздравляем! Вы угадали число ${rnd} за ${i} попытки` 
                    break    
              
                default:
                    res_str = `Поздравляем! Вы угадали число ${rnd} за ${i} попыток`   
              }
                                
            msg.style.color = 'green';
         } else {
             res_str = `Не угадал, попробуйте еще`             
             msg.style.color = 'red';            
         }     
    i++     
    msg.innerHTML = res_str
 })