let count = document.querySelector(".count")
let reset = document.querySelector(".reset")
let screen = document.querySelector(".screen")
let counter = 0



count.onclick = function(){
    ++screen.textContent
    reset.onclick = function (){
       screen.textContent = counter
    }
}

