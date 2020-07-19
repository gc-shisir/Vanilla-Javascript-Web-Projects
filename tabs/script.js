const navLink=document.querySelector('.tabs');
const panels=document.querySelectorAll('.tab-panel');
// console.log(panels)

navLink.addEventListener('click',function(e){
  if(e.target.tagName.toLowerCase()==='li'){
    // console.log(e.target.tagName)
    console.log(e.target)
    // for data attribute we use dataset. since we have target attribute so we use dataset.target
    const targetPanel=document.querySelector(e.target.dataset.target);
    // console.log(targetPanel)
    panels.forEach(function(panel){
      if(panel===targetPanel){
        e.target.classList.add('show');
        panel.classList.add('active');
      }else{
        e.target.classList.remove('show');
        panel.classList.remove('active');
      }
    })
  }
})