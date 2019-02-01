import { info } from './config.js';

// ## PERSONAS.HTML PAGE ##
// generates personas based on arcana clicked
function generatePersonaTable(arcana) {
	let personaDiv = document.getElementById('persona-table')
	personaDiv.innerHTML = ""
	let personaTable = document.createElement('table')
	personaTable.className= "table table-hover"

		personaTable.innerHTML = `
		  
		  <thead class="table-warning">
		    <tr>
		      <th scope="col">Arcana</th>
		      <th scope="col">Name</th>
				<th scope="col">Level</th>
					<th scope="col">Cost</th>
		    </tr>
		  </thead>

		  <tbody id="character-tablebody">
		 `

	for (let persona in info["persona"][arcana]) {
		let personaTR = document.createElement('tr')
		let personaLevel = info["persona"][arcana][persona]["data"]["level"]
		let personaCost = info["persona"][arcana][persona]["base_cost"]
		while(personaCost.charAt(0) === '0'){
			personaCost = personaCost.substr(1)
		}
		personaTR.innerHTML = `

		      <td scope="col">${arcana}</td>
		      <td scope="col">${persona}</td>
		      <td scope="col">${personaLevel}</td>
		      <td scope="col">${personaCost}</td>

		    `
		    personaTable.appendChild(personaTR)

	}
	personaDiv.appendChild(personaTable)
}

// Generates all personas in one table, this is also called in the reset function
function allPersonaTable() {
	let personaDiv = document.getElementById('persona-table')
	personaDiv.innerHTML = ""
	let personaTable = document.createElement('table')
	personaTable.className= "table table-hover"

		personaTable.innerHTML = `
		  
		  <thead class="table-warning">
		    <tr>
		      <th scope="col">Arcana</th>
		      <th scope="col">Name</th>
				<th scope="col">Level</th>
					<th scope="col">Cost</th>
		    </tr>
		  </thead>

		  <tbody id="character-tablebody">
		 `
	for (let arcana in info["persona"]) {
		for (let persona in info["persona"][arcana]) {
			let personaTR = document.createElement('tr')
			let personaLevel = info["persona"][arcana][persona]["data"]["level"]
			let personaCost = info["persona"][arcana][persona]["base_cost"]
			while(personaCost.charAt(0) === '0'){
				personaCost = personaCost.substr(1)
			}
			personaTR.innerHTML = `

	      <td scope="col">${arcana}</td>
	      <td scope="col">${persona}</td>
	      <td scope="col">${personaLevel}</td>
	      <td scope="col">${personaCost}</td>

	    `
	    personaTable.appendChild(personaTR)
		}
	}
	personaDiv.appendChild(personaTable)
}

// Events: persona selection by arcana
Object.keys(info["persona"]).forEach(element => {
	document.getElementById(element).addEventListener('click', () => {
		generatePersonaTable(element)
	})
}) 

// document load
document.addEventListener("DOMContentLoaded", allPersonaTable)

// Events: document reset button
document.getElementById("allPersona").addEventListener('click', () => {
	allPersonaTable()
})