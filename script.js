let btn =document.getElementById('button');
btn.addEventListener('click', function(){
    alert('ფორმა წარმატებით გაიგზავნა')
})

let navigationElement = document.getElementById('navbar');
let burgerElement = document.getElementById('burgerbar');

burgerElement.addEventListener('click',function(){
    navigationElement.classList.toggle('active');
})