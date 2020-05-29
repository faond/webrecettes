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

document.ready( () => {
	let url = new URL("../api/galerie_requetes.php", window.location.href);
	fetch(url, {
		method: 'GET'
	}).then( response => response.json() )
		.then( data => {
      let div_container = document.querySelector('.galerie_container');
      div_container.innerHTML = "";
				data.forEach( element => {
          let div_image  = document.createElement('div');
          div_image.classList.add('div_image');
          let image = document.createElement('img');
          image.classList.add('image_galerie');
          image.src = "../api/images/"+element.cheminPhoto;
          image.alt = element.cheminPhoto;
          div_image.appendChild(image);
          div_container.appendChild(div_image);
				});
			});
		});

    const entree = document.getElementById('entree_galerie');
    entree.onclick = event =>{
    let params = {};
    params.type = document.getElementById('entree_galerie').innerHTML;
    let url = new URL("../api/galerie_requetes_type.php", window.location.href);
    url.search = new URLSearchParams(params);
    fetch(url, {
      method: 'GET'
    }).then( response => response.json() )
      .then( data => {
        let div_container = document.querySelector('.galerie_container');
        div_container.innerHTML = "";
          data.forEach( element => {
            let div_image  = document.createElement('div');
            div_image.classList.add('div_image');
            let image = document.createElement('img');
            image.classList.add('image_galerie');
            image.src = "../api/images/"+element.cheminPhoto;
            image.alt = element.cheminPhoto;
            div_image.appendChild(image);
            div_container.appendChild(div_image);
          });
        });
      };

      const plat = document.getElementById('plat_galerie');
      plat.onclick = event =>{
      let params = {};
      params.type = document.getElementById('plat_galerie').innerHTML;
      let url = new URL("../api/galerie_requetes_type.php", window.location.href);
      url.search = new URLSearchParams(params);
      fetch(url, {
        method: 'GET'
      }).then( response => response.json() )
        .then( data => {
          let div_container = document.querySelector('.galerie_container');
          div_container.innerHTML = "";
            data.forEach( element => {
              let div_image  = document.createElement('div');
              div_image.classList.add('div_image');
              let image = document.createElement('img');
              image.classList.add('image_galerie');
              image.src = "../api/images/"+element.cheminPhoto;
              image.alt = element.cheminPhoto;
              div_image.appendChild(image);
              div_container.appendChild(div_image);
            });
          });
        };

        const dessert = document.getElementById('dessert_galerie');
        dessert.onclick = event =>{
        let params = {};
        params.type = document.getElementById('dessert_galerie').innerHTML;
        let url = new URL("../api/galerie_requetes_type.php", window.location.href);
        url.search = new URLSearchParams(params);
        fetch(url, {
          method: 'GET'
        }).then( response => response.json() )
          .then( data => {
            let div_container = document.querySelector('.galerie_container');
            div_container.innerHTML = "";
              data.forEach( element => {
                let div_image  = document.createElement('div');
                div_image.classList.add('div_image');
                let image = document.createElement('img');
                image.classList.add('image_galerie');
                image.src = "../api/images/"+element.cheminPhoto;
                image.alt = element.cheminPhoto;
                div_image.appendChild(image);
                div_container.appendChild(div_image);
              });
            });
          };

          const boisson = document.getElementById('boisson_galerie');
          boisson.onclick = event =>{
          let params = {};
          params.type = document.getElementById('boisson_galerie').innerHTML;
          let url = new URL("../api/galerie_requetes_type.php", window.location.href);
          url.search = new URLSearchParams(params);
          fetch(url, {
            method: 'GET'
          }).then( response => response.json() )
            .then( data => {
              let div_container = document.querySelector('.galerie_container');
              div_container.innerHTML = "";
                data.forEach( element => {
                  let div_image  = document.createElement('div');
                  div_image.classList.add('div_image');
                  let image = document.createElement('img');
                  image.classList.add('image_galerie');
                  image.src = "../api/images/"+element.cheminPhoto;
                  image.alt = element.cheminPhoto;
                  div_image.appendChild(image);
                  div_container.appendChild(div_image);
                });
              });
            };

            const all = document.getElementById('all_galerie');
            all.onclick = event =>{
            let params = {};
            params.type = document.getElementById('all_galerie').innerHTML;
            let url = new URL("../api/galerie_requetes_type.php", window.location.href);
            url.search = new URLSearchParams(params);
            fetch(url, {
              method: 'GET'
            }).then( response => response.json() )
              .then( data => {
                let div_container = document.querySelector('.galerie_container');
                div_container.innerHTML = "";
                  data.forEach( element => {
                    let div_image  = document.createElement('div');
                    div_image.classList.add('div_image');
                    let image = document.createElement('img');
                    image.classList.add('image_galerie');
                    image.src = "../api/images/"+element.cheminPhoto;
                    image.alt = element.cheminPhoto;
                    div_image.appendChild(image);
                    div_container.appendChild(div_image);
                  });
                });
              };
