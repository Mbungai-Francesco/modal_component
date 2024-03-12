'use strict';
const showBtns = document.querySelectorAll(".show-modal")
const closeBtn = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const openModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
const closeModal = () =>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener('click',openModal);
  
}
// showBtns.forEach(element => {
//   addEventListener('click',openModal)
// });
closeBtn.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)
document.addEventListener('keydown', function (e){
  // console.log(e.key)
  if(e.key == 'Escape' && !modal.classList.contains('hidden')) closeModal()
})