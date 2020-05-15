// document ready in ES6
Document.prototype.ready = callback => {
	if(callback && typeof callback === 'function') {
		document.addEventListener("DOMContentLoaded", () =>  {
			if(document.readyState === "interactive" || document.readyState === "complete") {
				return callback();
			}
		});
	}
};

// on va créer un slider
document.ready( () => {
	console.log("coucou"); 
	let url = new URL("api/slider.php", window.location.href);
	fetch(url, {
		method: 'GET'
	}).then( response => response.json() )
		.then( data => {
				console.log("coucou2");
				let background = []; //On créer un tableau qui va contenir les images
				let i = 0;
				data.forEach( element => {
					background[i] = element.cheminPhoto;
					i++;
				});
				function changeImage(image) {
					document.querySelector( ".slider" ).style.backgroundImage = 'url(api/images/slider/'+image+')';
				}

				setInterval(function() {
					index = Math.floor( Math.random() * background.length );
					changeImage(background[index]);
					}, 2000);


				/*data.forEach(element => {
					let image = document.createElement("img");
					image.src = "../webrecettes/api/images/slider/"+element.cheminPhoto;
					let slider = document.getElementById('slider');
					slider.appendChild(image);
				});*/
			});
		});

//fetch('../webrecettes/api/requetes.php', {
//method: 'GET',
//body: JSON.stringify(params)
