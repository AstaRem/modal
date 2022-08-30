/** 
  Creating interactive buttons: Open Modal
  
  0) Add 'display: none' to '#overlay' - we want to hide it initially!
  1) Use document.getElementById to target "open-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "block"
**/

let openModal = document.getElementById("open-modal")
let overlay = document.getElementById("overlay")
let closeModal = document.getElementById("close-modal")

openModal.addEventListener("click", function(){
    overlay.style.display = "block"
})

closeModal.addEventListener("click", function(){
    overlay.style.display = "none"
})

