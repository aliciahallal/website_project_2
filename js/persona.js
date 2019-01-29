import { info } from './config.js';

// ## PERSONAS.HTML PAGE ##
function generatePersonaTable(arcana) {
	let personaTable = document.getElementById('persona-table')
	personaTable.innerHTML = ""

	for (let persona in info["persona"][arcana]) {
		let personaDiv = document.createElement('div')
		let personaLevel = info["persona"][arcana][persona]["data"]["level"]
		let personaCost = info["persona"][arcana][persona]["base_cost"]
		while(personaCost.charAt(0) === '0'){
			personaCost = personaCost.substr(1)
		}

		personaDiv.innerHTML = `
		  <table class="table table-danger">
		  <thead>
		    <tr>
		      <th scope="col">Arcana: ${arcana}</span></th>
		      <th scope="col">Name:<span class="table-header-span">  ${persona}</span></th>
					<th scope="col">Level:<span class="table-header-span">  ${personaLevel}</span></th>
					<th scope="col">Cost:<span class="table-header-span">  ¥${personaCost}</span></th>
		    </tr>
		  </thead>
		  </table>
		 `
		personaTable.appendChild(personaDiv)
	}
}

// Events: persona selection by arcana
Object.keys(info["persona"]).forEach(element => {
	document.getElementById(element).addEventListener('click', () => {
		generatePersonaTable(element)
	})
}) 