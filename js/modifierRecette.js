const button = document.querySelector('.bouton_modifier');
button.onclick = event =>{
  let urlcourante2 = document.location.href;
  console.log(urlcourante2);
  let intitule = urlcourante2.split('id=')[1];
  intitule = decodeURI(intitule);

  console.log(intitule);

let change = document.querySelector('.button');
let params = {};
params.changement = change.getAttribute('name');
params.valeur = change.value;
params.intitule = intitule;
fetch('../api/modifierRecette.php', {
method: 'PUT',
body: JSON.stringify(params)
  }).then( response => response.json() )
  .then( data => {
        alert('Intitulé changé');
        console.log(data);
        window.location.replace(window.location.href + "?id"+data.intitule);
        window.location.reload(true);

    });
  };
