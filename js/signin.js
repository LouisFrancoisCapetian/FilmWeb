let signin=document.getElementById('signin');
let signup=document.getElementById('signup');
let page=document.getElementsByClassName('page1')[0];
let signup_box=document.getElementsByClassName('signup-box')[0];
let signin_box=document.getElementsByClassName('signin-box')[0];

signup.addEventListener('click',()=>{
	page.style.transform='translateX(87.5%)';
	signin_box.classList.add('hidden');
	signup_box.classList.remove('hidden');
})

signin.addEventListener('click',()=>{
	page.style.transform='translateX(0%)';
	signup_box.classList.add('hidden');
	signin_box.classList.remove('hidden');
})
