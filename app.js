let playerOne = document.querySelector('.player--0')
let playerTwo = document.querySelector('.player--1')
let newBtn = document.querySelector('.new11')
let rollBtn = document.querySelector('.roll11')
let holdBtn = document.querySelector('.hold11')
let diceImg = document.querySelector('.dice')
let currentOne = document.getElementById('current--0')
let currentTwo = document.getElementById('current--1')
let scoreOne = document.getElementById('score--0')
let scoreTwo = document.getElementById('score--1')
let siteMain = document.querySelector('.siteMain')
let a=0;let b=0;
currentOne.innerHTML=0
currentTwo.innerHTML=0

rollBtn.addEventListener('click', ()=> {
   let randNumber = Number((Math.random()*5).toFixed(0))+1
   diceImg.src = `dice-${randNumber}.png`
   let newArray = []
   playerOne.classList.forEach((item) => {
      newArray.push(item)
   })
   const arrayFilter = newArray.filter((item)=> {
      return item == 'player--active';
   })
   if(arrayFilter.length && Number(scoreOne.innerHTML) < 100 && Number(scoreOne.innerHTML) < 100){
      if(randNumber != 1){
         currentOne.innerText = Number(currentOne.innerText) + randNumber;
      }else {
         currentOne.innerHTML = 0;
         if(Number(scoreOne.innerHTML) < 100 && Number(scoreTwo.innerHTML) <100) {
            scoreOne.innerHTML = 0;
         }
         playerOne.classList.forEach((item) => {
            if(item == 'player--active' && Number(scoreOne.innerHTML) < 100 && Number(scoreTwo.innerHTML) <100) {
               playerOne.classList.remove('player--active')
               playerTwo.classList.add('player--active')
            } else {
               playerOne.classList.add('player--active')
               playerTwo.classList.remove('player--active')
            }
         })
      }
   }else if(Number(scoreOne.innerHTML) >= 100 || Number(scoreTwo.innerHTML) >= 100) {
      diceImg.src = ''
   }
   else {
      if(randNumber != 1 && Number(scoreOne.innerHTML) < 100 && Number(scoreTwo.innerHTML) < 100){
         currentTwo.innerHTML = Number(currentTwo.innerHTML) + randNumber;
      }else if(Number(scoreOne.innerHTML) < 100 && Number(scoreTwo.innerHTML) < 100){
         currentTwo.innerHTML = 0;
         if(Number(scoreOne.innerHTML) < 100 && Number(scoreTwo.innerHTML) <100) {
            scoreTwo.innerHTML = 0;
         }
         playerOne.classList.forEach((item) => {
            if(item == 'player--active' && Number(scoreOne.innerHTML) < 100 && Number(scoreTwo.innerHTML) <100) {
               playerOne.classList.remove('player--active')
               playerTwo.classList.add('player--active')
            } else {
               playerOne.classList.add('player--active')
               playerTwo.classList.remove('player--active')
            }
         })
      }
   }
})

holdBtn.addEventListener('click', ()=> {
   scoreOne.innerHTML = Number(scoreOne.innerHTML) + Number(currentOne.innerHTML);
   scoreTwo.innerHTML = Number(scoreTwo.innerHTML) + Number(currentTwo.innerHTML);

   if(Number(scoreOne.innerHTML) >= 100 && Number(scoreTwo.innerHTML) <100) {
      playerOne.classList.add('player--winner')
      diceImg.src = ''
   }else if(Number(scoreOne.innerHTML) < 100 && Number(scoreTwo.innerHTML) >=100){
      playerTwo.classList.add('player--winner')
      diceImg.src = ''
   }else {
      playerOne.classList.forEach((item) => {
         if(item == 'player--active' && Number(scoreOne.innerHTML) < 100 && Number(scoreTwo.innerHTML) <100) {
            playerOne.classList.remove('player--active')
            playerTwo.classList.add('player--active')
         } else if(Number(scoreOne.innerHTML) < 100 && Number(scoreTwo.innerHTML) < 100){
            playerOne.classList.add('player--active')
            playerTwo.classList.remove('player--active')
         }
      })
   }
   currentOne.innerHTML = 0;
   currentTwo.innerHTML = 0;
})
newBtn.addEventListener('click', ()=> {
   diceImg.src=''

   currentOne.innerHTML = 0;
   currentTwo.innerHTML = 0;
   scoreOne.innerHTML = 0
   scoreTwo.innerHTML = 0
   playerOne.classList.remove('player--winner')
   playerTwo.classList.remove('player--winner')
   diceImg.classList.add('append')
   playerOne.classList.remove('player--active')
   playerTwo.classList.remove('player--active')
   playerOne.classList.add('player--active');

   if(Number(scoreOne.innerHTML) < 100 || Number(scoreTwo.innerHTML) < 100) {
      rollBtn.addEventListener('click', ()=> {
         diceImg.classList.remove('append')
         diceImg.src = `dice-${randNumber}.png`
      })
   }
})