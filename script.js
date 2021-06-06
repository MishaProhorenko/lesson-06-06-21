'use strict';


let count = 0;

block.addEventListener('mouseover', (e) => {	
	e.target.classList.add('middle');
	e.target.innerText = `Hoverd by mounse ${count++} times`

})
block.addEventListener('mouseout', (e) => {
	e.target.classList.remove('middle');
	e.target.classList.add('block');		
})


