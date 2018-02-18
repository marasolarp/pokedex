

// traer los elementos del html que se usaran
// traer formulario
const form = document.getElementById('pokeform');// form
// input ingreso nombre pokemon
const searchPoke = document.getElementById('pokeName');// label - input
// contenedor donde ira el resultado
const contenedorPokemon = document.getElementById('contenedorPokemon');
let searchedForPokemon;

// Evento submit del formulario e instrucciones a ejecutar 
form.addEventListener('submit', function(e) {
  e.preventDefault();
  contenedorPokemon.innerHTML = '';
  searchedForPokemon = searchPoke.value;
  getPokemon();
});

// llamando los datos de la  api
function getPokemon() {
  // creando objeto con el new
  const pokeRequest = new XMLHttpRequest();
  pokeRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedForPokemon}`);
  pokeRequest.onload = addPoke;
  pokeRequest.onerror = handleError;
  // enviando la peticion
  pokeRequest.send();
}
// funcion que muestra el mensaje de error 
function handleError() {
  console.log('An error occurred 😞');
}
function addPoke() {
  // convertir la respuesta que esta en json en una respuesta javascript
  const data = JSON.parse(this.responseText);
  console.log(data);
  const name = data.name;
  console.log(name);
  const type = data.types[0].type.name;
  const ability = data.abilities[0].ability.name;
  const experience = data.base_experience;
  const pokeImg = data.sprites.front_default;
  const pokebat = data.sprites.back_default;
  console.log(pokeImg);
  const height = data.height;
  const weight = data.weight;	
	 const poke = 
	`<div class="col-xs-6 col-md-4 col-md-3  text-center cardPoke" data-toggle="modal" data-target="#myModal">
	 	<div class="pokemon"><img src="${pokeImg}" alt=""></div>
	 	<div class="namePoke">${name}</div>
	</div>
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">${name}</h4>
      </div>
      <div class="modal-body">
        <table class="centered bordered">
					<tbody>
						<tr>
              <td>COMO SE VE EN BATLLA:</td>
              <td><img src=${data.sprites.back_default}></td>
            </tr>
						<tr>
						  <td>TIPO:</td>
              <td>${data.types[0].type.name}</td>
            </tr>
            <tr>
              <td>HABILIDAD:</td>
              <td> ${data.abilities[0].ability.name}</td>
            </tr>
            
            <tr>
             <td>EXPERIENCIA:</td>
              <td>${data.base_experience}</td>
            </tr>
            <tr>
              <td>MIDE y PESA</td>
							<td>mide ${height}0 cm. y pesa ${weight} pokeKg.</td>
				    </tr>
          </tbody>
				</table>
			</div>
			<div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
  contenedorPokemon.innerHTML = poke;
};
$('.modal').modal();