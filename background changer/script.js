const button=document.querySelector('.btn-change');
const text=document.querySelector('.color-text')
const background=document.querySelector('body');


function colorChange(){
  let color='';
  const colorArr=['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  const arrLength=colorArr.length;
  for(i=1;i<=6;i++){
    let itemPosition=Math.floor(Math.random()*arrLength)
    // console.log(itemPosition);
    color+=colorArr[itemPosition];
    // console.log(color);
  }

  background.style.backgroundColor='#'+color;
  text.innerText = "Color: #"+color;
}

button.addEventListener('click',colorChange);