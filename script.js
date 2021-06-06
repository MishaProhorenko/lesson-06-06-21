'use strict';


//focus


//onfocus


let user = {
	name: 'Rajif',
	surname: 'Das',
	personalId: 'x23x123x22',
}



// ourInput.addEventListener('focus', (e) => {
// 	// e.target.value = `${user.name} ${user.surname}`;

// });
// ourInput.addEventListener('blur', (e) => {
// 	// e.target.value = `${user.personalId} (${user.name} ${user.surname})`;
// 	console.log('blur');
// });

ourInput.addEventListener('focus', (e) => {
	e.target.style.color = '';

});
ourInput.addEventListener('focus', (event) => {
	event.target.style.color = '';
});

ourInput.addEventListener('change', (event) => {
	if (event.target.value.length < 8) {
		event.target.style.color = 'red';
		errorSection.innerText = `${event.target.value} is invaid`;
	} else {
		const li = document.createElement('li');
		li.innerText = event.target.value;
		list.append(li);
		errorSection.innerText = '';
		event.target.value = '';
	}
});










