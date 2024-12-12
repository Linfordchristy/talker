const x=document.querySelector('.log')
const a=document.querySelector('.reg')
const y=document.querySelector('#logger')
const z=document.querySelector('#regger')
y.addEventListener('click', () =>{
	a.classList.add('non')
	x.classList.remove('non')
})
z.addEventListener('click', () =>{
	a.classList.remove('non')
	x.classList.add('non')
})